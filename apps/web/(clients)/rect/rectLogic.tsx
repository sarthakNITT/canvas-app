export default function RectLogic (canvas: any, ctx: any) {
    console.log(`called: rect`);
    ctx.fillStyle = "rgba(0,0,0)"
    ctx.fillRect(0, 0, canvas.width, canvas.height)
    ctx.strokeStyle = "rgba(255, 255, 255)"

    let clicked = false
    let startX = 0;
    let startY = 0;

    canvas.addEventListener("mousedown", (e: any)=>{
        clicked = true;
        startX = e.clientX;
        startY = e.clientY;
    })

    canvas.addEventListener("mouseup", (e: any)=>{
        clicked = false
    })

    canvas.addEventListener("mousemove", (e: any)=>{
        if(clicked){
            const width = e.clientX - startX
            const height = e.clientY - startY
            ctx.clearRect(0, 0, canvas.width, canvas.height)
            ctx.fillStyle = 'rgba(0, 0, 0)'
            ctx.fillRect(0, 0, canvas.width, canvas.height)
            ctx.strokeStyle = 'rgba(255, 255, 255)'
            ctx.strokeRect(startX, startY, width, height)
        }
    })
}