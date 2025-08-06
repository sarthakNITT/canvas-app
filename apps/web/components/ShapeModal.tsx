import Square from "@repo/icons/square"
import Circle from "@repo/icons/circle"
import Arrow from "@repo/icons/arrow"
import Alphabet from "@repo/icons/alphabet"
import { ShapeSelected } from "../zustand/store"

type shapeDesign = "text" | "arc" | "line" | "rect"

export default function ShapeModal () {
    const setShape = ShapeSelected((state)=>state.setShape)
    const shape = ShapeSelected((state)=>state.shape)
    const lock = ShapeSelected((state)=>state.lock)
    const darkMode = ShapeSelected((state)=>state.darkMode)
    function changeShape (e: shapeDesign) {
        console.log(`shape changed to: ${e}`);
        setShape(e)
    }
    const commonStyles = (e: string) =>
    `flex cursor-pointer p-2 ${
        shape === e && !lock
        ? (darkMode
            ? "bg-[rgba(64,62,106,255)] rounded"
            : "bg-[rgba(224,223,255,255)] rounded")
        : ""
    }`

    return (
        <div className="flex gap-2 rounded-[10px] items-center">
            <button className={commonStyles("rect")} onClick={()=>changeShape('rect')}><Square color={darkMode ? "white" : "black" }/></button>
            <button className={commonStyles("arc")} onClick={()=>changeShape('arc')}><Circle color={darkMode ? "white" : "black" }/></button>
            <button className={commonStyles("line")} onClick={()=>changeShape('line')}><Arrow color={darkMode ? "white" : "black" }/></button>
            <button className={commonStyles("text")} onClick={()=>changeShape('text')}><Alphabet color={darkMode ? "white" : "black" }/></button>
        </div>
    )
}