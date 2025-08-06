"use client"

import { ShapeSelected } from "../../zustand/store";

export default function CircleLogic (canvas: any, ctx: any, colour: string, strokeColour: string) {
    console.log(`called: circle`);
    ctx.fillStyle = colour
    ctx.fillRect(0, 0, canvas.width, canvas.height)
    ctx.strokeStyle = "rgba(255, 255, 255)"
    
    let clicked = false;
    let startX = 0;
    let startY = 0;

    const handleMouseDown = (e: any) => {
        clicked = true;
        startX = e.clientX;
        startY = e.clientY;
        console.log(startX, startY);
    }
    const handleMouseUp = (e: any) => {
        clicked = false;
    }
    const handleMouseMove = (e: any) => {
        if(clicked){
            ctx.beginPath();
            const radius = e.clientX - startX
            ctx.arc(Math.abs(startX), Math.abs(startY), Math.abs(radius), 0, 2 * Math.PI);
            ctx.clearRect(0, 0, canvas.width, canvas.height)
            ctx.fillStyle = colour
            ctx.fillRect(0, 0, canvas.width, canvas.height)
            ctx.strokeStyle = strokeColour
            ctx.stroke();
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