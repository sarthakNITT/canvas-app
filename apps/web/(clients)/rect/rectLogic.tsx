"use client"

import { ShapeSelected } from "../../zustand/store";

export default function RectLogic (canvas: any, ctx: any, colour: string, strokeColour: string) {
    console.log(`called: rect`);
    ctx.fillStyle = colour
    ctx.fillRect(0, 0, canvas.width, canvas.height)
    ctx.strokeStyle = "rgba(255, 255, 255)"

    let clicked = false
    let startX = 0;
    let startY = 0;

    const handleMouseDown = (e: any) => {
        clicked = true;
        startX = e.clientX;
        startY = e.clientY;
    }
    const handleMouseUp = (e: any) => {
        clicked = false
    }
    const handleMouseMove = (e: any) => {
        if(clicked){
            const width = e.clientX - startX
            const height = e.clientY - startY
            ctx.clearRect(0, 0, canvas.width, canvas.height)
            ctx.fillStyle = colour
            ctx.fillRect(0, 0, canvas.width, canvas.height)
            ctx.strokeStyle = strokeColour
            ctx.strokeRect(startX, startY, width, height)
        }
    }

    canvas.addEventListener("mousedown", handleMouseDown)
    canvas.addEventListener("mouseup", handleMouseUp)
    canvas.addEventListener("mousemove", handleMouseMove)

    return () => {
        canvas.removeEventListener("mousedown", handleMouseDown)
        canvas.removeEventListener("mousemove", handleMouseMove)
        canvas.removeEventListener("mouseup", handleMouseUp)
    }
}