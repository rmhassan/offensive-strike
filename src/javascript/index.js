import "../sass/main.scss";

//grid width and height
let bw = 400;
let bh = 400;
//padding around grid
let p = 10;
//size of canvas
let cw = bw + p * 2 + 1;
let ch = bh + p * 2 + 1;

let canvas = document.querySelector("#canvas");
canvas.width = cw;
canvas.height = ch;

let context = canvas.getContext("2d");

function drawBoard() {
  for (let x = 0; x <= bw; x += 40) {
    context.moveTo(0.5 + x + p, p);
    context.lineTo(0.5 + x + p, bh + p);
  }

  for (let x = 0; x <= bh; x += 40) {
    context.moveTo(p, 0.5 + x + p);
    context.lineTo(bw + p, 0.5 + x + p);
  }

  context.strokeStyle = "black";
  context.stroke();
}

drawBoard();
