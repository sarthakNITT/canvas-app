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
import Sun from "@repo/icons/sun"

export default function App () {
    const canvasRef = useRef<HTMLCanvasElement>(null)
    const shape = ShapeSelected((state)=>state.shape)
    const lock = ShapeSelected((state)=>state.lock)
    const colour = ShapeSelected((state)=>state.canvasColour)
    const darkMode = ShapeSelected((state)=>state.darkMode)
    const setLock = ShapeSelected((state)=>state.setLock)
    const setDarkMode = ShapeSelected((state)=>state.setDarkMode)
    const setColour = ShapeSelected((state)=>state.setCanvasColour)
    
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
    },[canvasRef, shape, lock, colour])

    function Mode () {
        setDarkMode(!darkMode)
        if(darkMode){
            console.log("hellogi");
            setColour('rgba(255,255,255)')
        }else{
            setColour('rgba(0,0,0)')
        }
    }

    const boxStyles = `flex flex-row absolute left-1/2 transform -translate-x-1/2 mt-3 text-white gap-4 py-2 px-4 ${darkMode ? "bg-[rgba(35,35,42,255)]" : "bg-white shadow-md" } rounded-[10px] items-center`
    const borderStyles = `pr-4 ${darkMode ? "border-r" : "border-r border-black" }`
    const lockStyles = `flex cursor-pointer ${darkMode ? "bg-[rgba(64,62,106,255)]" : "bg-[rgba(224,223,255,255)]" } rounded  p-2`
    return(
        <div>
            <div className={boxStyles}>
                <div className={borderStyles}>
                    {lock===false ? 
                        <button className="flex cursor-pointer p-2" onClick={()=>setLock(!lock)}><Unlock color={darkMode ? "white" : "black" }/></button>
                    :
                        <button className={lockStyles} onClick={()=>setLock(!lock)}><Lock color={darkMode ? "white" : "black" }/></button>
                    }
                </div>
                <div className={borderStyles}>
                    <ShapeModal/>
                </div>
                <div className="flex flex-row gap-4">
                    <button className="flex cursor-pointer"><Colour color={darkMode ? "white" : "black" }/></button>
                    {darkMode ? 
                        <button className="flex cursor-pointer" onClick={Mode}><Sun color={darkMode ? "white" : "black" }/></button>
                        :
                        <button className="flex cursor-pointer" onClick={Mode}><Moon color={darkMode ? "white" : "black" }/></button>
                    }
                </div>
            </div>
            <canvas ref={canvasRef}></canvas>
        </div>
    )
}