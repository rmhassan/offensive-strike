// get random number
let min = 0;
let max = 9;
const randomNumber = () => Math.floor(Math.random() * (max - min + 1)) + min;

// const arrowKeysCode = {
//   left: 37,
//   up: 38,
//   right: 39,
//   down: 40
// };
// let playerPosition = {
//   x: 0,
//   y: 0
// };
// let playerIndexPosition = { row: 0, col: 0 };
let random_boolean = () => Math.random() <= 0.1;
// Initiate Canvas board
let canvas = document.querySelector("#canvas");
canvas.width = 400;
canvas.height = 400;
let ctx = canvas.getContext("2d");

// This array  decide the box will be blocked or not
let mapArray = [];

for (let i = 0; i <= 9; i++) {
  let subArray = [];
  for (let j = 0; j <= 9; j++) {
    subArray.push(random_boolean());
  }
  mapArray.push(subArray);
}
// Drwa Grid
const drawGrid = () => {
  // Y pointer at the beginning
  let ypos = 0;
  for (let i = 0; i <= 9; i++) {
    // X pointer at the beginning
    let xpos = 0;
    for (let j = 0; j <= 9; j++) {
      ctx.beginPath();
      ctx.moveTo(xpos, ypos);
      if (mapArray[i][j] === true) {
        ctx.fillStyle = "#FF0000";
        ctx.fillRect(xpos, ypos, 40, 40);
      } else {
        ctx.strokeStyle = "#000000";
        ctx.strokeRect(xpos, ypos, 40, 40);
      }
      /// Increment x pointer by 40px after every iteration
      xpos += 40;
    }
    /// Increment y pointer by 40px after every iteration
    ypos += 40;
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
