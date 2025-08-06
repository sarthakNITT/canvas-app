export default function TextLogic (canvas: any, ctx: any) {
    let text = "";
    ctx.fillStyle = "rgba(0,0,0)"
    ctx.fillRect(0, 0, canvas.width, canvas.height)
    ctx.strokeStyle = "rgba(255, 255, 255)"
    let startX = 0;
    let startY = 0;
    let clicked = false;
    let typeStart = false;
    canvas.addEventListener("mousedown", (e: any)=>{
        clicked = true
        {typeStart===true ? typeStart=false : typeStart=true }
        startX = e.clientX
        startY = e.clientY
    })
    canvas.tabIndex = 1000;
    canvas.addEventListener("keydown", (e: any)=>{
        if(clicked && typeStart){
            if(e.key==="Backspace"){
                text = text.slice(0, -1)
            }else if(e.key==="Enter" || e.key==="Meta" || e.key==="Shift" || e.key==="CapsLock" || e.key==="Tab" || e.key==="Escape" || e.key==="Alt" || e.key==="Control" || e.key==="Meta"){
                text = text
            }else{
                text+=e.key;
            }
            ctx.font = "15px Arial"
            ctx.clearRect(0, 0, canvas.width, canvas.height);
            ctx.fillStyle = 'black';
            ctx.fillRect(0, 0, canvas.width, canvas.height);
            ctx.fillStyle = 'white';
            ctx.fillText(text, startX, startY);
        }
    })
}