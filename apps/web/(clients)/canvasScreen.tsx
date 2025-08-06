"use client"
import { useEffect, useRef } from "react"
import RectLogic from "./rect/rectLogic"
import ShapeModal from "../components/ShapeModal"
import CircleLogic from "./circle/circleLogic"
import LineLogic from "./line/lineLogic"
import TextLogic from "./text/textLogic"
import { ShapeSelected } from "../zustand/store"

export default function App () {
    const canvasRef = useRef<HTMLCanvasElement>(null)
    const shape = ShapeSelected((state)=>state.shape)
    useEffect(()=>{
        if(canvasRef.current){
            const canvas = canvasRef.current
            const ctx = canvas.getContext('2d')
            if(!ctx){
                return 
            }
            console.log(`shape selected is: ${shape}`);
            if(shape==='arc'){
                CircleLogic(canvas, ctx)
            }else if(shape==='line'){
                LineLogic(canvas, ctx)
            }else if(shape==='text'){
                TextLogic(canvas, ctx)
            }else if(shape==='rect'){
                RectLogic(canvas, ctx)
            }
        }
    },[canvasRef, shape])
    return(
        <div>
            <div className="absolute mt-3 text-white">
                <ShapeModal/>
            </div>
            <canvas ref={canvasRef} width={window.innerWidth} height={window.innerHeight}></canvas>
        </div>
    )
}