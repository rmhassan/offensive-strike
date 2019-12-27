import { offset } from "../index";
// get random number
let min = 0;
let max = 9;
const randomNumber = () => Math.floor(Math.random() * (max - min + 1)) + min;

let random_boolean = () => Math.random() <= 0.1;
// Initiate Canvas board
let canvas = document.querySelector("#canvas");
canvas.width = 1030;
canvas.height = 610;
let ctx = canvas.getContext("2d");

// This array  decide the box will be blocked or not
let mapArray = [];

for (let i = 0; i <= 8; i++) {
  let subArray = [];
  for (let j = 0; j <= 15; j++) {
    subArray.push(random_boolean());
  }
  mapArray.push(subArray);
}
// Drwa Grid
const drawGrid = () => {
  // Y pointer at the beginning
  let ypos = 0;
  for (let i = 0; i <= 8; i++) {
    // X pointer at the beginning
    let xpos = 0;
    for (let j = 0; j <= 15; j++) {
      ctx.beginPath();
      ctx.moveTo(xpos, ypos);
      if (mapArray[i][j] === true) {
        ctx.fillStyle = "#535c68";
        ctx.fillRect(xpos, ypos, offset, offset);
      } else {
        ctx.strokeStyle = "#000000";
        ctx.strokeRect(xpos, ypos, offset, offset);
      }
      /// Increment x pointer by 80px after every iteration
      xpos += offset;
    }
    /// Increment y pointer by 80px after every iteration
    ypos += offset;
  }
};

// Draw player to grid
const drawPlayer = (xPosition, yPosition) => {
  ctx.beginPath();
  ctx.moveTo(xPosition, yPosition);
  ctx.fillStyle = "#2f2f2f";
  ctx.fillRect(xPosition + 10, yPosition + 10, 20, 20);
};
export { mapArray, ctx };
export default drawGrid;
