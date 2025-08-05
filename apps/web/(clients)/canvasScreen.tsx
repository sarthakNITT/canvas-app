"use client"
import { useEffect, useRef } from "react"
import RectLogic from "./rect/rectLogic"
import ShapeModal from "../components/ShapeModal"
import CircleLogic from "./circle/circleLogic"
import LineLogic from "./line/lineLogic"

export default function App () {
    const canvasRef = useRef<HTMLCanvasElement>(null)
    useEffect(()=>{
        if(canvasRef.current){
            const canvas = canvasRef.current
            const ctx = canvas.getContext('2d')
            if(!ctx){
                return 
            }
            // LineLogic(canvas, ctx)
            // CircleLogic(canvas, ctx)
            // RectLogic(canvas, ctx)
        }
    },[canvasRef])
    return(
        <div>
            <div className="absolute mt-3 text-white">
                <ShapeModal/>
            </div>
            <canvas ref={canvasRef} width={window.innerWidth} height={window.innerHeight}></canvas>
        </div>
    )
}