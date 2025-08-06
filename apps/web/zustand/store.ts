import {create} from "zustand"

type State = {
    shape: "text" | "arc" | "line" | "rect",
    lock: boolean
}
type Action = {
    setShape: (shape: State['shape'])=>void,
    setLock: (shape: State['lock'])=>void,
}

export const ShapeSelected = create<State & Action>((set)=>({
    shape: "text",
    lock: false,
    setShape: (shape)=>set(()=>({shape: shape})),
    setLock: (lock)=>set(()=>({lock: lock}))
}))