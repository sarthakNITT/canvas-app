"use client"

import { ShapeSelected } from "../../zustand/store";

export default function LineLogic (canvas: any, ctx: any, colour: string, strokeColour: string) {
    console.log(`called: line`);
    ctx.fillStyle = colour
    ctx.fillRect(0, 0, canvas.width, canvas.height)
    ctx.strokeStyle = "rgba(255, 255, 255)"

    let clicked = false;
    let startX = 0;
    let startY = 0;

    const handleMouseDown =(e: any) => {
        clicked = true;
        startX = e.clientX;
        startY = e.clientY;
    }
    const handleMouseUp =(e: any) => {
        clicked = false
        ctx.clearRect(0, 0, canvas.width, canvas.height)
        ctx.fillStyle = colour
        ctx.fillRect(0, 0, canvas.width, canvas.height)
        ctx.strokeStyle = strokeColour
        ctx.beginPath()
        ctx.moveTo(startX, startY)
        ctx.lineTo(e.clientX, e.clientY)
        ctx.stroke()
    }
    const handleMouseMove =(e: any) => {
        if(clicked){
            ctx.clearRect(0, 0, canvas.width, canvas.height)
            ctx.fillStyle = colour
            ctx.fillRect(0, 0, canvas.width, canvas.height)
            ctx.strokeStyle = strokeColour
            ctx.beginPath()
            ctx.moveTo(startX, startY)
            ctx.lineTo(e.clientX, e.clientY)
            ctx.stroke()
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