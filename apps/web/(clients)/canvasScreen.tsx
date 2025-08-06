"use client"
import { useEffect, useRef } from "react"
import RectLogic from "./rect/rectLogic"
import ShapeModal from "../components/ShapeModal"
import CircleLogic from "./circle/circleLogic"
import LineLogic from "./line/lineLogic"
import TextLogic from "./text/textLogic"
import { ShapeSelected } from "../zustand/store"
import Colour from "@repo/icons/colour"
import Unlock from "@repo/icons/unlock"
import Lock from "@repo/icons/lock"
import Moon from "@repo/icons/moon"

export default function App () {
    const canvasRef = useRef<HTMLCanvasElement>(null)
    const shape = ShapeSelected((state)=>state.shape)
    const lock = ShapeSelected((state)=>state.lock)
    const colour = ShapeSelected((state)=>state.canvasColour)
    const setLock = ShapeSelected((state)=>state.setLock)
    
    useEffect(()=>{
        let cleanup: any;
        console.log(`Lock status: ${lock}`);
        if(lock) return
        else if(canvasRef.current){
            const canvas = canvasRef.current
            canvas.width = window.innerWidth;
            canvas.height = window.innerHeight;
            const ctx = canvas.getContext('2d')
            if(!ctx){
                return 
            }
            console.log(`shape selected is: ${shape}`);
            if(shape==='arc'){
                console.log(`calling: ${shape}`);
                cleanup = CircleLogic(canvas, ctx, colour)
            }else if(shape==='line'){
                console.log(`calling: ${shape}`);
                cleanup = LineLogic(canvas, ctx, colour)
            }else if(shape==='text'){
                console.log(`calling: ${shape}`);
                cleanup = TextLogic(canvas, ctx, colour)
            }else if(shape==='rect'){
                console.log(`calling: ${shape}`);
                cleanup = RectLogic(canvas, ctx, colour)
            }
        }

        return () => {
            cleanup?.()
        }
    },[canvasRef, shape, lock])
    return(
        <div>
            <div className="flex flex-row absolute mt-3 text-white gap-4 py-2 px-4 bg-blue-800/30 rounded-[10px] items-center">
                <div className="pr-4 border-r">
                    {lock===false ? 
                        <button className="flex cursor-pointer" onClick={()=>setLock(!lock)}><Unlock/></button>
                    :
                        <button className="flex cursor-pointer" onClick={()=>setLock(!lock)}><Lock/></button>
                    }
                </div>
                <div className="pr-4 border-r">
                    <ShapeModal/>
                </div>
                <div className="flex flex-row gap-4">
                    <button className="flex cursor-pointer"><Colour/></button>
                    <button className="flex cursor-pointer"><Moon/></button>
                </div>
            </div>
            <canvas ref={canvasRef}></canvas>
        </div>
    )
}