import {create} from "zustand"

type State = {
    shape: "text" | "arc" | "line" | "rect",
    lock: boolean,
    canvasColour: string
}
type Action = {
    setShape: (shape: State['shape'])=>void,
    setLock: (lock: State['lock'])=>void,
    setCanvasColour: (canvasColour: State['canvasColour'])=>void,
}

export const ShapeSelected = create<State & Action>((set)=>({
    shape: "text",
    lock: false,
    canvasColour: "rgba(0,0,0)",
    setShape: (shape)=>set(()=>({shape: shape})),
    setLock: (lock)=>set(()=>({lock: lock})),
    setCanvasColour: (canvasColour)=>set(()=>({canvasColour: canvasColour}))
}))