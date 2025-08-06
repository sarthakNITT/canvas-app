import {create} from "zustand"

type State = {
    shape: "text" | "arc" | "line" | "rect" | 'lock'
}
type Action = {
    setShape: (shape: State['shape'])=>void
}

export const ShapeSelected = create<State & Action>((set)=>({
    shape: "text",
    setShape: (shape)=>set(()=>({shape: shape}))
}))