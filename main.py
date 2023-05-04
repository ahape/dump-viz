#!/usr/local/bin/python3.11
import os, sys, argparse, tempfile, random
import graphviz as GV
from color_palette import colors
from json import load as json_loader

class CallNode:
  _color_map = {}

  def __init__(self, json):
    cf = json["callFrame"]
    self.id = str(json["id"])
    self.name = cf["functionName"] or "(anonymous)"
    self.parent = str(json.get("parent", "???"))
    self.url = cf.get("url", "")
    self.script_name = self.url[self.url.rindex("/")+1:] if "/" in self.url else "(unknown)"
    self.line_number = cf.get("lineNumber", 0)
    self.column_number = cf.get("columnNumber", 0)
    self.script_id = cf.get("scriptId", 0)
    self.code_type = cf.get("codeType", "???")
    if self.script_id not in CallNode._color_map:
      CallNode._color_map[self.script_id] = random.choice(colors)
    self.color = CallNode._color_map[self.script_id]

  @property
  def label(self):
    return f"{self.name}\n{self.script_name}\n{self.line_number}:{self.column_number}"

  def is_from_script(self, script_name):
    return self.url.endswith(script_name)

def rget(dic, path):
  attrs = path.split(".")
  while attrs:
    a = attrs[0]
    attrs = attrs[1:]
    dic = dic.get(a, None)
    if dic is None:
      break
  return dic

def load_profile(filepath):
  all_nodes = []; data = []
  with open(filepath, "r", encoding="utf8") as file:
    data = json_loader(file)
  for d in data:
    if (nodes := rget(d, "args.data.cpuProfile.nodes")):
      all_nodes += nodes
  call_nodes = [CallNode(json) for json in all_nodes]
  out = []
  for cn in call_nodes:
    if cn.script_id != 0 and \
       not cn.url.startswith("chrome-extension://") and \
       cn.code_type == "JS":
      out.append(cn)
  return out

def load_args():
  parser = argparse.ArgumentParser()
  parser.add_argument("profile")
  parser.add_argument("--filter", action="append")
  return parser.parse_args()

def filter_call_nodes(call_nodes, filters):
  filtered = []
  for script_name in filters:
    filtered += [cn for cn in call_nodes if cn.is_from_script(script_name)]
  return filtered

def create_graph(call_nodes):
  g = GV.Digraph(filename="Diagram", directory=tempfile.gettempdir(), format="svg")
  for cn in call_nodes:
    g.node(cn.id, label=cn.label, penwidth="3", color=cn.color)
    g.edge(cn.parent, cn.id)
  g.view()

def main(args):
  call_nodes = load_profile(args.profile)
  if args.filter:
    call_nodes = filter_call_nodes(call_nodes, args.filter)
  create_graph(call_nodes)

if __name__ == "__main__":
  main(load_args())
