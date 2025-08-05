export default function LineLogic (canvas: any, ctx: any) {
    ctx.fillStyle = "rgba(0,0,0)"
    ctx.fillRect(0, 0, canvas.width, canvas.height)
    ctx.strokeStyle = "rgba(255, 255, 255)"

    let clicked = false;
    let startX = 0;
    let startY = 0;

    canvas.addEventListener("mousedown", (e: any)=>{
        clicked = true;
        startX = e.clientX;
        startY = e.clientY;
    })

    canvas.addEventListener("mouseup", (e: any)=>{
        clicked = false
        ctx.clearRect(0, 0, canvas.width, canvas.height)
        ctx.fillStyle = 'rgba(0, 0, 0)'
        ctx.fillRect(0, 0, canvas.width, canvas.height)
        ctx.strokeStyle = 'rgba(255, 255, 255)'
        ctx.beginPath()
        ctx.moveTo(startX, startY)
        ctx.lineTo(e.clientX, e.clientY)
        ctx.stroke()
    })

    canvas.addEventListener("mousemove", (e: any)=>{
        if(clicked){
            ctx.clearRect(0, 0, canvas.width, canvas.height)
            ctx.fillStyle = 'rgba(0, 0, 0)'
            ctx.fillRect(0, 0, canvas.width, canvas.height)
            ctx.strokeStyle = 'rgba(255, 255, 255)'
            ctx.beginPath()
            ctx.moveTo(startX, startY)
            ctx.lineTo(e.clientX, e.clientY)
            ctx.stroke()
        }
    })
}