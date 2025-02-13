# DumpViz

A graphviz rendering of a Chrome DevTools performance dump (trace.json)

![image](https://github.com/user-attachments/assets/5a2ae0a6-a9f8-4f70-90c7-77a975bafdb3)

## Requirements

- Python 3.8+ and PIP

## Setup

Clone the repo and run the following:

```sh
pip install -r requirements.txt
```

Then, per the Python [installation instructions](https://pypi.org/project/graphviz/#installation) for GraphViz, "Make sure that the directory containing the dot executable is on your systems' PATH"

## Usage

Download the trace file you would like to see a graph for

![image](https://github.com/user-attachments/assets/b1c9c02f-d245-4efb-a58b-f8e45464b0ee)

Open the JSON file in any text editor and trim the root object so that all there is is the array of `{ "args": { ... } }` objects. Save the updated JSON file. (TODO: impl code to bypass this step)

Run the following command from this repo's root directory:

```sh
python3 main.py /path/to/trace.json
```

Alternatively, if you only care about seeing the stack traces from *one* particular script file:

```sh
python3 main.py /path/to/trace.json --filter="specific-script.js"
```

The generated SVG file should open automatically in whatever you default viewing tool is.
