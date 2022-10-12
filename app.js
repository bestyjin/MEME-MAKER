const canvas = document.querySelector("canvas");
const ctx = canvas.getContext("2d");
canvas.width = 800;
canvas.height = 800;

ctx.fillRect(200,200,20,100);
ctx.fillRect(300,200,20,100);
ctx.fillRect(230,200,60,150);
ctx.fill();

ctx.arc(260,150,40,0,2*Math.PI);
ctx.fill();

ctx.beginPath();
ctx.fillStyle = "white";
ctx.arc(240,150,5,Math.PI,2*Math.PI);
ctx.arc(280,150,5,Math.PI,2*Math.PI);
ctx.fill();