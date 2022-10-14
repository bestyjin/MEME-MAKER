const canvas = document.querySelector("canvas");
const ctx = canvas.getContext("2d");
canvas.width = 800;
canvas.height = 800;

const colors = [
    "#ff3838",
    "#ffb8b8",
    "#c56cf0",
    "#ff9f1a",
    "#fff200",
    "#32ff7e",
    "#7efff5",
    ]


function onClick(event) {
    ctx.beginPath();
    ctx.moveTo(0,0)
    ctx.strokeStyle = colors[Math.floor(Math.random()*colors.length)];
    ctx.lineTo(event.offsetX,event.offsetY);
    ctx.stroke();
}
canvas.addEventListener("mousemove", onClick);