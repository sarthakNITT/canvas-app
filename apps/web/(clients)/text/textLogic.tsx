export default function TextLogic (canvas: any, ctx: any) {
    let text = "";
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
                    }else if(e.key==="Enter"){
                        text+="/n"
                    }else{
                        text+=e.key;
                    }
                    ctx.font = "15px Arial"
                    ctx.clearRect(0, 0, canvas.width, canvas.height)
                    ctx.fillText(text, startX, startY)
                }
            })
}