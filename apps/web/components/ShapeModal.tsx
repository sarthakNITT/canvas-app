import Square from "@repo/icons/square"
import Circle from "@repo/icons/circle"
import Arrow from "@repo/icons/arrow"
import Unlock from "@repo/icons/unlock"
import Alphabet from "@repo/icons/alphabet"

export default function ShapeModal () {
    return (
        <div className="flex gap-4 py-2 px-4 bg-blue-800/30 rounded-[10px] items-center">
            <Unlock/>
            <Square/>
            <Circle/>
            <Arrow/>
            <Alphabet/>
        </div>
    )
}