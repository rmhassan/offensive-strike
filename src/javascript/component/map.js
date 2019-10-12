let canvas = document.querySelector("#canvas");
canvas.width = 120;
canvas.height = 120;
let ctx = canvas.getContext("2d");
let mapArray = [
  [false, false, false],
  [false, false, true],
  [true, false, false]
];

// for (let i = 0; i < 3; i++) {
//   let subArray = [];
//   for (let j = 0; j < 3; j++) {
//     subArray.push(true);
//   }
//   mapArray.push(subArray);
// }
let ypos = 0;
for (let i = 0; i < 3; i++) {
  let xpos = 0;
  for (let j = 0; j < 3; j++) {
    ctx.beginPath();
    ctx.moveTo(xpos, ypos);
    if (mapArray[i][j] === true) {
      ctx.fillStyle = "#FF0000";
      ctx.fillRect(xpos, ypos, 40, 40);
    } else {
      ctx.strokeStyle = "#000000";
      ctx.strokeRect(xpos, ypos, 40, 40);
    }
    xpos += 40;
  }
  ypos += 40;
}
