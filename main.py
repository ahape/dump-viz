#!/usr/local/bin/python3.11
import os, sys, argparse, tempfile, random
import graphviz as GV
from color_palette import colors
from json import load as json_loader

#https://chromedevtools.github.io/devtools-protocol/tot/Runtime/#type-CallFrame
class CallFrame:
  def __init__(self, cf):
    self.name = cf["functionName"] or "(anonymous)"
    self.url = cf.get("url", "")
    self.line_number = cf.get("lineNumber", 0)
    self.column_number = cf.get("columnNumber", 0)
    self.script_id = cf.get("scriptId", 0)
    self.code_type = cf.get("codeType", "???")

#https://chromedevtools.github.io/devtools-protocol/tot/Profiler/#type-ProfileNode
class ProfileNode:
  _color_map = {}
  _lookup = {}

  def __init__(self, pn, timestamp):
    self.cf = cf = pn["callFrame"]
    self.id = str(pn["id"])
    self.parent = str(pn.get("parent", "???"))
    self.script_name = self.url[self.url.rindex("/")+1:] if "/" in self.url else "(unknown)"
    self.timestamp = timestamp
    if self.script_id not in ProfileNode._color_map:
      ProfileNode._color_map[self.script_id] = random.choice(colors)
    self.color = ProfileNode._color_map[self.script_id]

    ProfileNode._lookup[self.id] = self

  @property
  def label(self):
    return f"{self.name}\n{self.script_name}\n{self.line_number}:{self.column_number}"

  def is_from_script(self, script_name):
    return self.url.endswith(script_name)

  def calc_parent_time_delta(self):
    parent = ProfileNode._lookup.get(self.parent, None)
    if not parent:
      return 0
    return (self.timestamp - parent.timestamp) // 1000

def rget(dic, path):
  attrs = path.split(".")
  while attrs:
    a = attrs[0]
    attrs = attrs[1:]
    dic = dic.get(a, None)
    if dic is None:
      break
  return dic

def should_exclude_profile_node(pn):
  return pn.script_id == 0 or \
         pn.url.startswith("chrome-extension://") or \
         pn.code_type != "JS"

def get_profile_timestamp(p):
  ...

def load_profile(filepath):
  profile_nodes = []; data = []
  with open(filepath, "r", encoding="utf8") as file:
    data = json_loader(file)
  for d in data:
    if (nodes := rget(d, "args.data.cpuProfile.nodes")):
      for node in nodes:
        profile_nodes.append(ProfileNode(node, get_timestamp(d)))
  out = []
  for pn in profile_nodes:
    if not should_exclude_profile_node(pn):
      out.append(pn)
  out.sort(key=lambda x: x.timestamp)
  return out

def load_args():
  parser = argparse.ArgumentParser()
  parser.add_argument("profile")
  parser.add_argument("--filter", action="append")
  return parser.parse_args()

def filter_profile_nodes(profile_nodes, filters):
  filtered = []
  for script_name in filters:
    filtered += [pn for pn in profile_nodes if pn.is_from_script(script_name)]
  return filtered

def create_graph(profile_nodes):
  g = GV.Digraph(filename="Diagram", directory=tempfile.gettempdir(), format="svg")
  for pn in profile_nodes:
    g.node(pn.id, label=pn.label, penwidth="3", color=pn.color)
    g.edge(pn.parent, pn.id, label=f"{pn.calc_parent_time_delta():,}ms")
  g.view()

def main(args):
  profile_nodes = load_profile(args.profile)
  if args.filter:
    profile_nodes = filter_profile_nodes(profile_nodes, args.filter)
  create_graph(profile_nodes)

if __name__ == "__main__":
  main(load_args())
