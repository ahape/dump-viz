// To parse this data:
//
//   import { Convert } from "./file";
//
//   const profilerTypes = Convert.toProfilerTypes(json);
//
// These functions will throw an error if the JSON doesn't
// match the expected interface, even if the JSON is valid.

export interface ProfilerTypes {
    args:   Args;
    cat:    Cat;
    name:   string;
    ph:     Bp;
    pid:    number;
    tid:    number;
    ts:     number;
    dur?:   number;
    tdur?:  number;
    tts?:   number;
    s?:     S;
    id?:    number | string;
    bp?:    Bp;
    id2?:   Id2;
    scope?: Cat;
}

export interface Args {
    name?:                                     string;
    uptime?:                                   string;
    data?:                                     Data;
    chrome_latency_info?:                      ChromeLatencyInfo;
    frameSeqId?:                               number;
    layerTreeId?:                              number;
    endData?:                                  EndData;
    url?:                                      string;
    type?:                                     ArgsType;
    usedHeapSizeAfter?:                        number;
    usedHeapSizeBefore?:                       number;
    epoch?:                                    number;
    beginData?:                                BeginData;
    elementCount?:                             number;
    frame?:                                    PageEnum;
    microtask_count?:                          number;
    layerId?:                                  number;
    tileData?:                                 TileData;
    frameId?:                                  number;
    LazyPixelRef?:                             number;
    pixelRefId?:                               number;
    imageType?:                                string;
    ukm_page_load_timing_update?:              UkmPageLoadTimingUpdate;
    main_frame_tree_node_id?:                  number;
    hasPartialUpdate?:                         boolean;
    snapshot?:                                 Snapshot;
    number?:                                   number;
    sort_index?:                               number;
    labels?:                                   string;
    chrome_frame_reporter?:                    ChromeFrameReporter;
    send_begin_mainframe_to_commit_breakdown?: { [key: string]: number };
    aborted_main?:                             number;
    no_damage_main?:                           number;
}

export interface BeginData {
    frame:          PageEnum;
    stackTrace?:    StackTrace[];
    startLine?:     number;
    url?:           string;
    dirtyObjects?:  number;
    partialLayout?: boolean;
    totalObjects?:  number;
}

export enum PageEnum {
    A323264032895254B48Ff342Aefae8C4 = "A323264032895254B48FF342AEFAE8C4",
    Empty = "",
}

export interface StackTrace {
    columnNumber: number;
    functionName: string;
    lineNumber:   number;
    scriptId:     string;
    url:          string;
}

export interface ChromeFrameReporter {
    affects_smoothness:               boolean;
    frame_sequence:                   number;
    frame_source:                     number;
    has_compositor_animation:         boolean;
    has_high_latency:                 boolean;
    has_main_animation:               boolean;
    has_missing_content:              boolean;
    has_smooth_input_main:            boolean;
    layer_tree_host_id:               number;
    scroll_state:                     ScrollState;
    state:                            State;
    high_latency_contribution_stage?: string[];
    frame_type?:                      FrameType;
}

export enum FrameType {
    Forked = "FORKED",
}

export enum ScrollState {
    ScrollNone = "SCROLL_NONE",
}

export enum State {
    StateDropped = "STATE_DROPPED",
    StateNoUpdateDesired = "STATE_NO_UPDATE_DESIRED",
    StatePresentedAll = "STATE_PRESENTED_ALL",
    StatePresentedPartial = "STATE_PRESENTED_PARTIAL",
}

export interface ChromeLatencyInfo {
    trace_id:        number;
    step?:           Step;
    component_info?: ComponentInfo[];
    is_coalesced?:   boolean;
}

export interface ComponentInfo {
    component_type: ComponentType;
    time_us:        number;
}

export enum ComponentType {
    ComponentDisplayCompositorReceivedFrame = "COMPONENT_DISPLAY_COMPOSITOR_RECEIVED_FRAME",
    ComponentInputEventGPUSwapBuffer = "COMPONENT_INPUT_EVENT_GPU_SWAP_BUFFER",
    ComponentInputEventLatencyBeginRwh = "COMPONENT_INPUT_EVENT_LATENCY_BEGIN_RWH",
    ComponentInputEventLatencyFrameSwap = "COMPONENT_INPUT_EVENT_LATENCY_FRAME_SWAP",
    ComponentInputEventLatencyOriginal = "COMPONENT_INPUT_EVENT_LATENCY_ORIGINAL",
    ComponentInputEventLatencyRendererMain = "COMPONENT_INPUT_EVENT_LATENCY_RENDERER_MAIN",
    ComponentInputEventLatencyRendererSwap = "COMPONENT_INPUT_EVENT_LATENCY_RENDERER_SWAP",
    ComponentInputEventLatencyRenderingScheduledMain = "COMPONENT_INPUT_EVENT_LATENCY_RENDERING_SCHEDULED_MAIN",
    ComponentInputEventLatencyUI = "COMPONENT_INPUT_EVENT_LATENCY_UI",
}

export enum Step {
    StepDidHandleInputAndOverscroll = "STEP_DID_HANDLE_INPUT_AND_OVERSCROLL",
    StepDrawAndSwap = "STEP_DRAW_AND_SWAP",
    StepFinishedSwapBuffers = "STEP_FINISHED_SWAP_BUFFERS",
    StepHandleInputEventImpl = "STEP_HANDLE_INPUT_EVENT_IMPL",
    StepHandleInputEventMain = "STEP_HANDLE_INPUT_EVENT_MAIN",
    StepHandleInputEventMainCommit = "STEP_HANDLE_INPUT_EVENT_MAIN_COMMIT",
    StepHandledInputEventImpl = "STEP_HANDLED_INPUT_EVENT_IMPL",
    StepHandledInputEventMainOrImpl = "STEP_HANDLED_INPUT_EVENT_MAIN_OR_IMPL",
    StepSendInputEventUI = "STEP_SEND_INPUT_EVENT_UI",
    StepSwapBuffers = "STEP_SWAP_BUFFERS",
}

export interface Data {
    frameTreeNodeId?:         number;
    frames?:                  FrameElement[];
    persistentIds?:           boolean;
    renderer_pid?:            number;
    used_bytes?:              number;
    frame?:                   PurpleFrame;
    timerId?:                 number;
    columnNumber?:            number;
    functionName?:            FunctionName;
    lineNumber?:              number;
    scriptId?:                string;
    url?:                     string;
    documents?:               number;
    jsEventListeners?:        number;
    jsHeapSizeUsed?:          number;
    nodes?:                   number;
    needsBeginFrame?:         number;
    frameId?:                 number;
    layerTreeId?:             number;
    isMainFrame?:             boolean;
    isOutermostMainFrame?:    boolean;
    page?:                    PageEnum;
    type?:                    DataType;
    viewport_rect?:           number[];
    encodedDataLength?:       number;
    fromCache?:               boolean;
    fromServiceWorker?:       boolean;
    mimeType?:                string;
    requestId?:               string;
    responseTime?:            number;
    statusCode?:              number;
    timing?:                  { [key: string]: number };
    readyState?:              number;
    singleShot?:              boolean;
    stackTrace?:              StackTrace[];
    timeout?:                 number;
    decodedBodyLength?:       number;
    didFail?:                 boolean;
    finishTime?:              number;
    id?:                      number;
    allottedMilliseconds?:    number;
    timedOut?:                boolean;
    nodeId?:                  number;
    priority?:                string;
    requestMethod?:           string;
    clip?:                    number[];
    layerId?:                 number;
    cumulative_score?:        number;
    frame_max_distance?:      number;
    had_recent_input?:        boolean;
    impacted_nodes?:          ImpactedNode[];
    is_main_frame?:           boolean;
    last_input_timestamp?:    number;
    overall_max_distance?:    number;
    region_rects?:            Array<number[]>;
    score?:                   number;
    weighted_score_delta?:    number;
    height?:                  number;
    srcHeight?:               number;
    srcWidth?:                number;
    width?:                   number;
    x?:                       number;
    y?:                       number;
    interactionType?:         string;
    maxDuration?:             number;
    totalDuration?:           number;
    durationInMilliseconds?:  number;
    inMainFrame?:             boolean;
    isAnimated?:              boolean;
    loadEndInMilliseconds?:   number;
    loadStartInMilliseconds?: number;
    size?:                    number;
    startTime?:               number;
    cpuProfile?:              CPUProfile;
    lines?:                   number[];
    timeDeltas?:              number[];
    cancelable?:              boolean;
    duration?:                number;
    interactionId?:           number;
    processingEnd?:           number;
    processingStart?:         number;
    timeStamp?:               number;
}

export interface CPUProfile {
    nodes?:  Node[];
    samples: number[];
}

export interface Node {
    callFrame: CallFrame;
    id:        number;
    parent?:   number;
}

export interface CallFrame {
    codeType:      CodeType;
    functionName:  string;
    scriptId:      number;
    columnNumber?: number;
    lineNumber?:   number;
    url?:          string;
}

export enum CodeType {
    JS = "JS",
    Other = "other",
}

export enum PurpleFrame {
    A323264032895254B48Ff342Aefae8C4 = "A323264032895254B48FF342AEFAE8C4",
    F9C1E1B14D45440665Db9Fea491C8328 = "F9C1E1B14D45440665DB9FEA491C8328",
}

export interface FrameElement {
    frame:     PurpleFrame;
    name:      string;
    processId: number;
    url:       string;
    parent?:   PageEnum;
}

export enum FunctionName {
    CheckURL = "checkUrl",
    ElemDataHandle = "elemData.handle",
    Empty = "",
    Later = "later",
    ObserverHandler = "observerHandler",
    OnMouseClick = "onMouseClick",
    Process = "process",
    Schedule = "schedule",
    ScheduledProcess = "scheduledProcess",
}

export interface ImpactedNode {
    new_rect: number[];
    node_id:  number;
    old_rect: number[];
}

export enum DataType {
    Click = "click",
    Load = "load",
    Mousedown = "mousedown",
    Mousemove = "mousemove",
    Mouseout = "mouseout",
    Mouseover = "mouseover",
    Mouseup = "mouseup",
    Pointerdown = "pointerdown",
    Pointerenter = "pointerenter",
    Pointerleave = "pointerleave",
    Pointerout = "pointerout",
    Pointerover = "pointerover",
    Pointerup = "pointerup",
    Selectionchange = "selectionchange",
    Selectstart = "selectstart",
    Text = "text",
}

export interface EndData {
    move?:        boolean;
    nodeId?:      number;
    nodeName?:    NodeName;
    rectilinear?: boolean;
    x?:           number;
    y?:           number;
    endLine?:     number;
    layoutRoots?: LayoutRoot[];
}

export interface LayoutRoot {
    depth:  number;
    nodeId: number;
    quads:  Array<number[]>;
}

export enum NodeName {
    DIVClassCReportEditorParamsAndReportContainer = "DIV class='c-report-editor__params-and-report-container'",
    DIVClassGroupnameContainer = "DIV class='groupname__container'",
    TABLEClassCTable = "TABLE class='c-table'",
    TDClassReportGroupname = "TD class='report__groupname'",
    THClassCReportTableThIsValHeaderIsLastHeaderRow = "TH class='c-report-table__th is-val-header is-last-header-row'",
    Td = "TD",
}

export interface Snapshot {
    documentLoaderURL:    string;
    frame:                TileIDClass;
    isLoadingMainFrame:   boolean;
    isOutermostMainFrame: boolean;
}

export interface TileIDClass {
    id_ref: string;
}

export interface TileData {
    layerId:           number;
    sourceFrameNumber: number;
    tileId:            TileIDClass;
    tileResolution:    TileResolution;
}

export enum TileResolution {
    HighResolution = "HIGH_RESOLUTION",
}

export enum ArgsType {
    AllocationFailure = "allocation failure",
}

export interface UkmPageLoadTimingUpdate {
    latest_cumulative_layout_shift: number;
    latest_url:                     string;
    ukm_source_id:                  number;
}

export enum Bp {
    B = "B",
    BpB = "b",
    E = "e",
    F = "f",
    I = "I",
    M = "M",
    N = "N",
    O = "O",
    P = "P",
    S = "s",
    X = "X",
}

export enum Cat {
    BenchmarkLatencyInfoRail = "benchmark,latencyInfo,rail",
    BlinkDevtoolsTimeline = "blink,devtools.timeline",
    CcBenchmarkDisabledByDefaultDevtoolsTimelineFrame = "cc,benchmark,disabled-by-default-devtools.timeline.frame",
    CcDisabledByDefaultDevtoolsTimeline = "cc,disabled-by-default-devtools.timeline",
    DevtoolsTimeline = "devtools.timeline",
    DevtoolsTimelineDisabledByDefaultV8Gc = "devtools.timeline,disabled-by-default-v8.gc",
    DevtoolsTimelineRail = "devtools.timeline,rail",
    DevtoolsTimelineV8 = "devtools.timeline,v8",
    DisabledByDefaultDevtoolsTimeline = "disabled-by-default-devtools.timeline",
    DisabledByDefaultDevtoolsTimelineFrame = "disabled-by-default-devtools.timeline.frame",
    DisabledByDefaultV8CPUProfiler = "disabled-by-default-v8.cpu_profiler",
    DisabledByDefaultV8Compile = "disabled-by-default-v8.compile",
    InputBenchmarkDevtoolsTimelineLatencyInfo = "input,benchmark,devtools.timeline,latencyInfo",
    InputBenchmarkLatencyInfo = "input,benchmark,latencyInfo",
    Loading = "loading",
    Metadata = "__metadata",
    V8 = "v8",
    V8Execute = "v8.execute",
}

export interface Id2 {
    local: string;
}

export enum S {
    T = "t",
}

// Converts JSON strings to/from your types
// and asserts the results of JSON.parse at runtime
export class Convert {
    public static toProfilerTypes(json: string): ProfilerTypes[] {
        return cast(JSON.parse(json), a(r("ProfilerTypes")));
    }

    public static profilerTypesToJson(value: ProfilerTypes[]): string {
        return JSON.stringify(uncast(value, a(r("ProfilerTypes"))), null, 2);
    }
}

function invalidValue(typ: any, val: any, key: any, parent: any = ''): never {
    const prettyTyp = prettyTypeName(typ);
    const parentText = parent ? ` on ${parent}` : '';
    const keyText = key ? ` for key "${key}"` : '';
    throw Error(`Invalid value${keyText}${parentText}. Expected ${prettyTyp} but got ${JSON.stringify(val)}`);
}

function prettyTypeName(typ: any): string {
    if (Array.isArray(typ)) {
        if (typ.length === 2 && typ[0] === undefined) {
            return `an optional ${prettyTypeName(typ[1])}`;
        } else {
            return `one of [${typ.map(a => { return prettyTypeName(a); }).join(", ")}]`;
        }
    } else if (typeof typ === "object" && typ.literal !== undefined) {
        return typ.literal;
    } else {
        return typeof typ;
    }
}

function jsonToJSProps(typ: any): any {
    if (typ.jsonToJS === undefined) {
        const map: any = {};
        typ.props.forEach((p: any) => map[p.json] = { key: p.js, typ: p.typ });
        typ.jsonToJS = map;
    }
    return typ.jsonToJS;
}

function jsToJSONProps(typ: any): any {
    if (typ.jsToJSON === undefined) {
        const map: any = {};
        typ.props.forEach((p: any) => map[p.js] = { key: p.json, typ: p.typ });
        typ.jsToJSON = map;
    }
    return typ.jsToJSON;
}

function transform(val: any, typ: any, getProps: any, key: any = '', parent: any = ''): any {
    function transformPrimitive(typ: string, val: any): any {
        if (typeof typ === typeof val) return val;
        return invalidValue(typ, val, key, parent);
    }

    function transformUnion(typs: any[], val: any): any {
        // val must validate against one typ in typs
        const l = typs.length;
        for (let i = 0; i < l; i++) {
            const typ = typs[i];
            try {
                return transform(val, typ, getProps);
            } catch (_) {}
        }
        return invalidValue(typs, val, key, parent);
    }

    function transformEnum(cases: string[], val: any): any {
        if (cases.indexOf(val) !== -1) return val;
        return invalidValue(cases.map(a => { return l(a); }), val, key, parent);
    }

    function transformArray(typ: any, val: any): any {
        // val must be an array with no invalid elements
        if (!Array.isArray(val)) return invalidValue(l("array"), val, key, parent);
        return val.map(el => transform(el, typ, getProps));
    }

    function transformDate(val: any): any {
        if (val === null) {
            return null;
        }
        const d = new Date(val);
        if (isNaN(d.valueOf())) {
            return invalidValue(l("Date"), val, key, parent);
        }
        return d;
    }

    function transformObject(props: { [k: string]: any }, additional: any, val: any): any {
        if (val === null || typeof val !== "object" || Array.isArray(val)) {
            return invalidValue(l(ref || "object"), val, key, parent);
        }
        const result: any = {};
        Object.getOwnPropertyNames(props).forEach(key => {
            const prop = props[key];
            const v = Object.prototype.hasOwnProperty.call(val, key) ? val[key] : undefined;
            result[prop.key] = transform(v, prop.typ, getProps, key, ref);
        });
        Object.getOwnPropertyNames(val).forEach(key => {
            if (!Object.prototype.hasOwnProperty.call(props, key)) {
                result[key] = transform(val[key], additional, getProps, key, ref);
            }
        });
        return result;
    }

    if (typ === "any") return val;
    if (typ === null) {
        if (val === null) return val;
        return invalidValue(typ, val, key, parent);
    }
    if (typ === false) return invalidValue(typ, val, key, parent);
    let ref: any = undefined;
    while (typeof typ === "object" && typ.ref !== undefined) {
        ref = typ.ref;
        typ = typeMap[typ.ref];
    }
    if (Array.isArray(typ)) return transformEnum(typ, val);
    if (typeof typ === "object") {
        return typ.hasOwnProperty("unionMembers") ? transformUnion(typ.unionMembers, val)
            : typ.hasOwnProperty("arrayItems")    ? transformArray(typ.arrayItems, val)
            : typ.hasOwnProperty("props")         ? transformObject(getProps(typ), typ.additional, val)
            : invalidValue(typ, val, key, parent);
    }
    // Numbers can be parsed by Date but shouldn't be.
    if (typ === Date && typeof val !== "number") return transformDate(val);
    return transformPrimitive(typ, val);
}

function cast<T>(val: any, typ: any): T {
    return transform(val, typ, jsonToJSProps);
}

function uncast<T>(val: T, typ: any): any {
    return transform(val, typ, jsToJSONProps);
}

function l(typ: any) {
    return { literal: typ };
}

function a(typ: any) {
    return { arrayItems: typ };
}

function u(...typs: any[]) {
    return { unionMembers: typs };
}

function o(props: any[], additional: any) {
    return { props, additional };
}

function m(additional: any) {
    return { props: [], additional };
}

function r(name: string) {
    return { ref: name };
}

const typeMap: any = {
    "ProfilerTypes": o([
        { json: "args", js: "args", typ: r("Args") },
        { json: "cat", js: "cat", typ: r("Cat") },
        { json: "name", js: "name", typ: "" },
        { json: "ph", js: "ph", typ: r("Bp") },
        { json: "pid", js: "pid", typ: 0 },
        { json: "tid", js: "tid", typ: 0 },
        { json: "ts", js: "ts", typ: 0 },
        { json: "dur", js: "dur", typ: u(undefined, 0) },
        { json: "tdur", js: "tdur", typ: u(undefined, 0) },
        { json: "tts", js: "tts", typ: u(undefined, 0) },
        { json: "s", js: "s", typ: u(undefined, r("S")) },
        { json: "id", js: "id", typ: u(undefined, u(0, "")) },
        { json: "bp", js: "bp", typ: u(undefined, r("Bp")) },
        { json: "id2", js: "id2", typ: u(undefined, r("Id2")) },
        { json: "scope", js: "scope", typ: u(undefined, r("Cat")) },
    ], false),
    "Args": o([
        { json: "name", js: "name", typ: u(undefined, "") },
        { json: "uptime", js: "uptime", typ: u(undefined, "") },
        { json: "data", js: "data", typ: u(undefined, r("Data")) },
        { json: "chrome_latency_info", js: "chrome_latency_info", typ: u(undefined, r("ChromeLatencyInfo")) },
        { json: "frameSeqId", js: "frameSeqId", typ: u(undefined, 0) },
        { json: "layerTreeId", js: "layerTreeId", typ: u(undefined, 0) },
        { json: "endData", js: "endData", typ: u(undefined, r("EndData")) },
        { json: "url", js: "url", typ: u(undefined, "") },
        { json: "type", js: "type", typ: u(undefined, r("ArgsType")) },
        { json: "usedHeapSizeAfter", js: "usedHeapSizeAfter", typ: u(undefined, 0) },
        { json: "usedHeapSizeBefore", js: "usedHeapSizeBefore", typ: u(undefined, 0) },
        { json: "epoch", js: "epoch", typ: u(undefined, 0) },
        { json: "beginData", js: "beginData", typ: u(undefined, r("BeginData")) },
        { json: "elementCount", js: "elementCount", typ: u(undefined, 0) },
        { json: "frame", js: "frame", typ: u(undefined, r("PageEnum")) },
        { json: "microtask_count", js: "microtask_count", typ: u(undefined, 0) },
        { json: "layerId", js: "layerId", typ: u(undefined, 0) },
        { json: "tileData", js: "tileData", typ: u(undefined, r("TileData")) },
        { json: "frameId", js: "frameId", typ: u(undefined, 0) },
        { json: "LazyPixelRef", js: "LazyPixelRef", typ: u(undefined, 0) },
        { json: "pixelRefId", js: "pixelRefId", typ: u(undefined, 0) },
        { json: "imageType", js: "imageType", typ: u(undefined, "") },
        { json: "ukm_page_load_timing_update", js: "ukm_page_load_timing_update", typ: u(undefined, r("UkmPageLoadTimingUpdate")) },
        { json: "main_frame_tree_node_id", js: "main_frame_tree_node_id", typ: u(undefined, 0) },
        { json: "hasPartialUpdate", js: "hasPartialUpdate", typ: u(undefined, true) },
        { json: "snapshot", js: "snapshot", typ: u(undefined, r("Snapshot")) },
        { json: "number", js: "number", typ: u(undefined, 0) },
        { json: "sort_index", js: "sort_index", typ: u(undefined, 0) },
        { json: "labels", js: "labels", typ: u(undefined, "") },
        { json: "chrome_frame_reporter", js: "chrome_frame_reporter", typ: u(undefined, r("ChromeFrameReporter")) },
        { json: "send_begin_mainframe_to_commit_breakdown", js: "send_begin_mainframe_to_commit_breakdown", typ: u(undefined, m(0)) },
        { json: "aborted_main", js: "aborted_main", typ: u(undefined, 0) },
        { json: "no_damage_main", js: "no_damage_main", typ: u(undefined, 0) },
    ], false),
    "BeginData": o([
        { json: "frame", js: "frame", typ: r("PageEnum") },
        { json: "stackTrace", js: "stackTrace", typ: u(undefined, a(r("StackTrace"))) },
        { json: "startLine", js: "startLine", typ: u(undefined, 0) },
        { json: "url", js: "url", typ: u(undefined, "") },
        { json: "dirtyObjects", js: "dirtyObjects", typ: u(undefined, 0) },
        { json: "partialLayout", js: "partialLayout", typ: u(undefined, true) },
        { json: "totalObjects", js: "totalObjects", typ: u(undefined, 0) },
    ], false),
    "StackTrace": o([
        { json: "columnNumber", js: "columnNumber", typ: 0 },
        { json: "functionName", js: "functionName", typ: "" },
        { json: "lineNumber", js: "lineNumber", typ: 0 },
        { json: "scriptId", js: "scriptId", typ: "" },
        { json: "url", js: "url", typ: "" },
    ], false),
    "ChromeFrameReporter": o([
        { json: "affects_smoothness", js: "affects_smoothness", typ: true },
        { json: "frame_sequence", js: "frame_sequence", typ: 0 },
        { json: "frame_source", js: "frame_source", typ: 0 },
        { json: "has_compositor_animation", js: "has_compositor_animation", typ: true },
        { json: "has_high_latency", js: "has_high_latency", typ: true },
        { json: "has_main_animation", js: "has_main_animation", typ: true },
        { json: "has_missing_content", js: "has_missing_content", typ: true },
        { json: "has_smooth_input_main", js: "has_smooth_input_main", typ: true },
        { json: "layer_tree_host_id", js: "layer_tree_host_id", typ: 0 },
        { json: "scroll_state", js: "scroll_state", typ: r("ScrollState") },
        { json: "state", js: "state", typ: r("State") },
        { json: "high_latency_contribution_stage", js: "high_latency_contribution_stage", typ: u(undefined, a("")) },
        { json: "frame_type", js: "frame_type", typ: u(undefined, r("FrameType")) },
    ], false),
    "ChromeLatencyInfo": o([
        { json: "trace_id", js: "trace_id", typ: 0 },
        { json: "step", js: "step", typ: u(undefined, r("Step")) },
        { json: "component_info", js: "component_info", typ: u(undefined, a(r("ComponentInfo"))) },
        { json: "is_coalesced", js: "is_coalesced", typ: u(undefined, true) },
    ], false),
    "ComponentInfo": o([
        { json: "component_type", js: "component_type", typ: r("ComponentType") },
        { json: "time_us", js: "time_us", typ: 0 },
    ], false),
    "Data": o([
        { json: "frameTreeNodeId", js: "frameTreeNodeId", typ: u(undefined, 0) },
        { json: "frames", js: "frames", typ: u(undefined, a(r("FrameElement"))) },
        { json: "persistentIds", js: "persistentIds", typ: u(undefined, true) },
        { json: "renderer_pid", js: "renderer_pid", typ: u(undefined, 0) },
        { json: "used_bytes", js: "used_bytes", typ: u(undefined, 0) },
        { json: "frame", js: "frame", typ: u(undefined, r("PurpleFrame")) },
        { json: "timerId", js: "timerId", typ: u(undefined, 0) },
        { json: "columnNumber", js: "columnNumber", typ: u(undefined, 0) },
        { json: "functionName", js: "functionName", typ: u(undefined, r("FunctionName")) },
        { json: "lineNumber", js: "lineNumber", typ: u(undefined, 0) },
        { json: "scriptId", js: "scriptId", typ: u(undefined, "") },
        { json: "url", js: "url", typ: u(undefined, "") },
        { json: "documents", js: "documents", typ: u(undefined, 0) },
        { json: "jsEventListeners", js: "jsEventListeners", typ: u(undefined, 0) },
        { json: "jsHeapSizeUsed", js: "jsHeapSizeUsed", typ: u(undefined, 0) },
        { json: "nodes", js: "nodes", typ: u(undefined, 0) },
        { json: "needsBeginFrame", js: "needsBeginFrame", typ: u(undefined, 0) },
        { json: "frameId", js: "frameId", typ: u(undefined, 0) },
        { json: "layerTreeId", js: "layerTreeId", typ: u(undefined, 0) },
        { json: "isMainFrame", js: "isMainFrame", typ: u(undefined, true) },
        { json: "isOutermostMainFrame", js: "isOutermostMainFrame", typ: u(undefined, true) },
        { json: "page", js: "page", typ: u(undefined, r("PageEnum")) },
        { json: "type", js: "type", typ: u(undefined, r("DataType")) },
        { json: "viewport_rect", js: "viewport_rect", typ: u(undefined, a(0)) },
        { json: "encodedDataLength", js: "encodedDataLength", typ: u(undefined, 0) },
        { json: "fromCache", js: "fromCache", typ: u(undefined, true) },
        { json: "fromServiceWorker", js: "fromServiceWorker", typ: u(undefined, true) },
        { json: "mimeType", js: "mimeType", typ: u(undefined, "") },
        { json: "requestId", js: "requestId", typ: u(undefined, "") },
        { json: "responseTime", js: "responseTime", typ: u(undefined, 3.14) },
        { json: "statusCode", js: "statusCode", typ: u(undefined, 0) },
        { json: "timing", js: "timing", typ: u(undefined, m(3.14)) },
        { json: "readyState", js: "readyState", typ: u(undefined, 0) },
        { json: "singleShot", js: "singleShot", typ: u(undefined, true) },
        { json: "stackTrace", js: "stackTrace", typ: u(undefined, a(r("StackTrace"))) },
        { json: "timeout", js: "timeout", typ: u(undefined, 0) },
        { json: "decodedBodyLength", js: "decodedBodyLength", typ: u(undefined, 0) },
        { json: "didFail", js: "didFail", typ: u(undefined, true) },
        { json: "finishTime", js: "finishTime", typ: u(undefined, 3.14) },
        { json: "id", js: "id", typ: u(undefined, 0) },
        { json: "allottedMilliseconds", js: "allottedMilliseconds", typ: u(undefined, 3.14) },
        { json: "timedOut", js: "timedOut", typ: u(undefined, true) },
        { json: "nodeId", js: "nodeId", typ: u(undefined, 0) },
        { json: "priority", js: "priority", typ: u(undefined, "") },
        { json: "requestMethod", js: "requestMethod", typ: u(undefined, "") },
        { json: "clip", js: "clip", typ: u(undefined, a(0)) },
        { json: "layerId", js: "layerId", typ: u(undefined, 0) },
        { json: "cumulative_score", js: "cumulative_score", typ: u(undefined, 3.14) },
        { json: "frame_max_distance", js: "frame_max_distance", typ: u(undefined, 3.14) },
        { json: "had_recent_input", js: "had_recent_input", typ: u(undefined, true) },
        { json: "impacted_nodes", js: "impacted_nodes", typ: u(undefined, a(r("ImpactedNode"))) },
        { json: "is_main_frame", js: "is_main_frame", typ: u(undefined, true) },
        { json: "last_input_timestamp", js: "last_input_timestamp", typ: u(undefined, 3.14) },
        { json: "overall_max_distance", js: "overall_max_distance", typ: u(undefined, 3.14) },
        { json: "region_rects", js: "region_rects", typ: u(undefined, a(a(0))) },
        { json: "score", js: "score", typ: u(undefined, 3.14) },
        { json: "weighted_score_delta", js: "weighted_score_delta", typ: u(undefined, 3.14) },
        { json: "height", js: "height", typ: u(undefined, 0) },
        { json: "srcHeight", js: "srcHeight", typ: u(undefined, 0) },
        { json: "srcWidth", js: "srcWidth", typ: u(undefined, 0) },
        { json: "width", js: "width", typ: u(undefined, 0) },
        { json: "x", js: "x", typ: u(undefined, 3.14) },
        { json: "y", js: "y", typ: u(undefined, 0) },
        { json: "interactionType", js: "interactionType", typ: u(undefined, "") },
        { json: "maxDuration", js: "maxDuration", typ: u(undefined, 0) },
        { json: "totalDuration", js: "totalDuration", typ: u(undefined, 0) },
        { json: "durationInMilliseconds", js: "durationInMilliseconds", typ: u(undefined, 0) },
        { json: "inMainFrame", js: "inMainFrame", typ: u(undefined, true) },
        { json: "isAnimated", js: "isAnimated", typ: u(undefined, true) },
        { json: "loadEndInMilliseconds", js: "loadEndInMilliseconds", typ: u(undefined, 0) },
        { json: "loadStartInMilliseconds", js: "loadStartInMilliseconds", typ: u(undefined, 0) },
        { json: "size", js: "size", typ: u(undefined, 0) },
        { json: "startTime", js: "startTime", typ: u(undefined, 0) },
        { json: "cpuProfile", js: "cpuProfile", typ: u(undefined, r("CPUProfile")) },
        { json: "lines", js: "lines", typ: u(undefined, a(0)) },
        { json: "timeDeltas", js: "timeDeltas", typ: u(undefined, a(0)) },
        { json: "cancelable", js: "cancelable", typ: u(undefined, true) },
        { json: "duration", js: "duration", typ: u(undefined, 0) },
        { json: "interactionId", js: "interactionId", typ: u(undefined, 0) },
        { json: "processingEnd", js: "processingEnd", typ: u(undefined, 0) },
        { json: "processingStart", js: "processingStart", typ: u(undefined, 0) },
        { json: "timeStamp", js: "timeStamp", typ: u(undefined, 0) },
    ], false),
    "CPUProfile": o([
        { json: "nodes", js: "nodes", typ: u(undefined, a(r("Node"))) },
        { json: "samples", js: "samples", typ: a(0) },
    ], false),
    "Node": o([
        { json: "callFrame", js: "callFrame", typ: r("CallFrame") },
        { json: "id", js: "id", typ: 0 },
        { json: "parent", js: "parent", typ: u(undefined, 0) },
    ], false),
    "CallFrame": o([
        { json: "codeType", js: "codeType", typ: r("CodeType") },
        { json: "functionName", js: "functionName", typ: "" },
        { json: "scriptId", js: "scriptId", typ: 0 },
        { json: "columnNumber", js: "columnNumber", typ: u(undefined, 0) },
        { json: "lineNumber", js: "lineNumber", typ: u(undefined, 0) },
        { json: "url", js: "url", typ: u(undefined, "") },
    ], false),
    "FrameElement": o([
        { json: "frame", js: "frame", typ: r("PurpleFrame") },
        { json: "name", js: "name", typ: "" },
        { json: "processId", js: "processId", typ: 0 },
        { json: "url", js: "url", typ: "" },
        { json: "parent", js: "parent", typ: u(undefined, r("PageEnum")) },
    ], false),
    "ImpactedNode": o([
        { json: "new_rect", js: "new_rect", typ: a(0) },
        { json: "node_id", js: "node_id", typ: 0 },
        { json: "old_rect", js: "old_rect", typ: a(0) },
    ], false),
    "EndData": o([
        { json: "move", js: "move", typ: u(undefined, true) },
        { json: "nodeId", js: "nodeId", typ: u(undefined, 0) },
        { json: "nodeName", js: "nodeName", typ: u(undefined, r("NodeName")) },
        { json: "rectilinear", js: "rectilinear", typ: u(undefined, true) },
        { json: "x", js: "x", typ: u(undefined, 0) },
        { json: "y", js: "y", typ: u(undefined, 0) },
        { json: "endLine", js: "endLine", typ: u(undefined, 0) },
        { json: "layoutRoots", js: "layoutRoots", typ: u(undefined, a(r("LayoutRoot"))) },
    ], false),
    "LayoutRoot": o([
        { json: "depth", js: "depth", typ: 0 },
        { json: "nodeId", js: "nodeId", typ: 0 },
        { json: "quads", js: "quads", typ: a(a(0)) },
    ], false),
    "Snapshot": o([
        { json: "documentLoaderURL", js: "documentLoaderURL", typ: "" },
        { json: "frame", js: "frame", typ: r("TileIDClass") },
        { json: "isLoadingMainFrame", js: "isLoadingMainFrame", typ: true },
        { json: "isOutermostMainFrame", js: "isOutermostMainFrame", typ: true },
    ], false),
    "TileIDClass": o([
        { json: "id_ref", js: "id_ref", typ: "" },
    ], false),
    "TileData": o([
        { json: "layerId", js: "layerId", typ: 0 },
        { json: "sourceFrameNumber", js: "sourceFrameNumber", typ: 0 },
        { json: "tileId", js: "tileId", typ: r("TileIDClass") },
        { json: "tileResolution", js: "tileResolution", typ: r("TileResolution") },
    ], false),
    "UkmPageLoadTimingUpdate": o([
        { json: "latest_cumulative_layout_shift", js: "latest_cumulative_layout_shift", typ: 3.14 },
        { json: "latest_url", js: "latest_url", typ: "" },
        { json: "ukm_source_id", js: "ukm_source_id", typ: 0 },
    ], false),
    "Id2": o([
        { json: "local", js: "local", typ: "" },
    ], false),
    "PageEnum": [
        "A323264032895254B48FF342AEFAE8C4",
        "",
    ],
    "FrameType": [
        "FORKED",
    ],
    "ScrollState": [
        "SCROLL_NONE",
    ],
    "State": [
        "STATE_DROPPED",
        "STATE_NO_UPDATE_DESIRED",
        "STATE_PRESENTED_ALL",
        "STATE_PRESENTED_PARTIAL",
    ],
    "ComponentType": [
        "COMPONENT_DISPLAY_COMPOSITOR_RECEIVED_FRAME",
        "COMPONENT_INPUT_EVENT_GPU_SWAP_BUFFER",
        "COMPONENT_INPUT_EVENT_LATENCY_BEGIN_RWH",
        "COMPONENT_INPUT_EVENT_LATENCY_FRAME_SWAP",
        "COMPONENT_INPUT_EVENT_LATENCY_ORIGINAL",
        "COMPONENT_INPUT_EVENT_LATENCY_RENDERER_MAIN",
        "COMPONENT_INPUT_EVENT_LATENCY_RENDERER_SWAP",
        "COMPONENT_INPUT_EVENT_LATENCY_RENDERING_SCHEDULED_MAIN",
        "COMPONENT_INPUT_EVENT_LATENCY_UI",
    ],
    "Step": [
        "STEP_DID_HANDLE_INPUT_AND_OVERSCROLL",
        "STEP_DRAW_AND_SWAP",
        "STEP_FINISHED_SWAP_BUFFERS",
        "STEP_HANDLE_INPUT_EVENT_IMPL",
        "STEP_HANDLE_INPUT_EVENT_MAIN",
        "STEP_HANDLE_INPUT_EVENT_MAIN_COMMIT",
        "STEP_HANDLED_INPUT_EVENT_IMPL",
        "STEP_HANDLED_INPUT_EVENT_MAIN_OR_IMPL",
        "STEP_SEND_INPUT_EVENT_UI",
        "STEP_SWAP_BUFFERS",
    ],
    "CodeType": [
        "JS",
        "other",
    ],
    "PurpleFrame": [
        "A323264032895254B48FF342AEFAE8C4",
        "F9C1E1B14D45440665DB9FEA491C8328",
    ],
    "FunctionName": [
        "checkUrl",
        "elemData.handle",
        "",
        "later",
        "observerHandler",
        "onMouseClick",
        "process",
        "schedule",
        "scheduledProcess",
    ],
    "DataType": [
        "click",
        "load",
        "mousedown",
        "mousemove",
        "mouseout",
        "mouseover",
        "mouseup",
        "pointerdown",
        "pointerenter",
        "pointerleave",
        "pointerout",
        "pointerover",
        "pointerup",
        "selectionchange",
        "selectstart",
        "text",
    ],
    "NodeName": [
        "DIV class='c-report-editor__params-and-report-container'",
        "DIV class='groupname__container'",
        "TABLE class='c-table'",
        "TD class='report__groupname'",
        "TH class='c-report-table__th is-val-header is-last-header-row'",
        "TD",
    ],
    "TileResolution": [
        "HIGH_RESOLUTION",
    ],
    "ArgsType": [
        "allocation failure",
    ],
    "Bp": [
        "B",
        "b",
        "e",
        "f",
        "I",
        "M",
        "N",
        "O",
        "P",
        "s",
        "X",
    ],
    "Cat": [
        "benchmark,latencyInfo,rail",
        "blink,devtools.timeline",
        "cc,benchmark,disabled-by-default-devtools.timeline.frame",
        "cc,disabled-by-default-devtools.timeline",
        "devtools.timeline",
        "devtools.timeline,disabled-by-default-v8.gc",
        "devtools.timeline,rail",
        "devtools.timeline,v8",
        "disabled-by-default-devtools.timeline",
        "disabled-by-default-devtools.timeline.frame",
        "disabled-by-default-v8.cpu_profiler",
        "disabled-by-default-v8.compile",
        "input,benchmark,devtools.timeline,latencyInfo",
        "input,benchmark,latencyInfo",
        "loading",
        "__metadata",
        "v8",
        "v8.execute",
    ],
    "S": [
        "t",
    ],
};
