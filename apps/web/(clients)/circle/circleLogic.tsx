export default function CircleLogic (canvas: any, ctx: any) {
    console.log(`called: circle`);
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
        console.log(startX, startY);
    })
    
    canvas.addEventListener("mouseup", (e: any)=>{
        clicked = false
    })
    
    canvas.addEventListener("mousemove", (e: any)=>{
        if(clicked){
            ctx.beginPath();
            const radius = e.clientX - startX
            ctx.arc(Math.abs(startX), Math.abs(startY), Math.abs(radius), 0, 2 * Math.PI);
            ctx.clearRect(0, 0, canvas.width, canvas.height)
            ctx.fillStyle = 'rgba(0, 0, 0)'
            ctx.fillRect(0, 0, canvas.width, canvas.height)
            ctx.strokeStyle = 'rgba(255, 255, 255)'
            ctx.stroke();
        }
    })
}