import Square from "@repo/icons/square"
import Circle from "@repo/icons/circle"
import Arrow from "@repo/icons/arrow"
import Alphabet from "@repo/icons/alphabet"
import { ShapeSelected } from "../zustand/store"

type shapeDesign = "text" | "arc" | "line" | "rect"

export default function ShapeModal () {
    const setShape = ShapeSelected((state)=>state.setShape)
    function changeShape (e: shapeDesign) {
        console.log(`shape changed to: ${e}`);
        setShape(e)
    }
    const commonStyles = "flex cursor-pointer"
    return (
        <div className="flex gap-4 rounded-[10px] items-center">
            <button className={commonStyles} onClick={()=>changeShape('rect')}><Square/></button>
            <button className={commonStyles} onClick={()=>changeShape('arc')}><Circle/></button>
            <button className={commonStyles} onClick={()=>changeShape('line')}><Arrow/></button>
            <button className={commonStyles} onClick={()=>changeShape('text')}><Alphabet/></button>
        </div>
    )
}