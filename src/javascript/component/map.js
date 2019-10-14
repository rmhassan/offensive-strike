// get random number
let min = 0;
let max = 2;
const randomNumber = () => Math.floor(Math.random() * (max - min + 1)) + min;

const arrowKeysCode = {
  left: 37,
  up: 38,
  right: 39,
  down: 40
};
let playerPosition = {
  x: 0,
  y: 0
};
let playerIndexPosition = { row: 0, col: 0 };
let random_boolean = () => Math.random() <= 0.1;
// Initiate Canvas board
let canvas = document.querySelector("#canvas");
canvas.width = 400;
canvas.height = 400;
let ctx = canvas.getContext("2d");

// This array will decide the box will be blocked or not
let mapArray = [];

for (let i = 0; i <= 9; i++) {
  let subArray = [];
  for (let j = 0; j <= 9; j++) {
    subArray.push(random_boolean());
  }
  mapArray.push(subArray);
}
//// Drwa Grid
let ypos = 0;
for (let i = 0; i <= 9; i++) {
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
    xpos += 40;
  }
  ypos += 40;
}

// Draw player to grid
const drawPlayer = (xPosition, yPosition) => {
  ctx.beginPath();
  ctx.moveTo(xPosition, yPosition);
  ctx.fillStyle = "#2f2f2f";
  ctx.fillRect(xPosition + 10, yPosition + 10, 20, 20);
};
const determinePlayerPosition = () => {
  let rowPosition = randomNumber();
  let colPosition = randomNumber();
  console.log(rowPosition, colPosition);
  if (!mapArray[rowPosition][colPosition]) {
    if (rowPosition > 0) {
      for (let i = 0; i < rowPosition; i++) {
        playerPosition.y += 40;
      }
    }
    if (colPosition > 0) {
      for (let j = 0; j < colPosition; j++) {
        playerPosition.x += 40;
      }
    }
    playerIndexPosition.row = rowPosition;
    playerIndexPosition.col = colPosition;
    drawPlayer(playerPosition.x, playerPosition.y);
  } else {
    return determinePlayerPosition();
  }
};
determinePlayerPosition();
//// Arrow keys event listener
window.addEventListener("keydown", e => {
  switch (e.keyCode) {
    case arrowKeysCode.left:
      if (
        !mapArray[playerIndexPosition.row][playerIndexPosition.col - 1] &&
        playerIndexPosition.col > 0
      ) {
        ctx.clearRect(playerPosition.x + 10, playerPosition.y + 10, 20, 20);
        playerPosition.x -= 40;
        playerIndexPosition.col -= 1;
        drawPlayer(playerPosition.x, playerPosition.y);
      }
      break;
    case arrowKeysCode.up:
      if (
        !mapArray[playerIndexPosition.row - 1][playerIndexPosition.col] &&
        playerIndexPosition.row > 0
      ) {
        ctx.clearRect(playerPosition.x + 10, playerPosition.y + 10, 20, 20);
        playerPosition.y -= 40;
        playerIndexPosition.row -= 1;
        drawPlayer(playerPosition.x, playerPosition.y);
      }
      break;
    case arrowKeysCode.right:
      if (
        !mapArray[playerIndexPosition.row][playerIndexPosition.col + 1] &&
        playerIndexPosition.col < mapArray[playerIndexPosition.row].length - 1
      ) {
        ctx.clearRect(playerPosition.x + 10, playerPosition.y + 10, 20, 20);
        playerPosition.x += 40;
        playerIndexPosition.col += 1;
        drawPlayer(playerPosition.x, playerPosition.y);
      }
      break;
    case arrowKeysCode.down:
      if (
        !mapArray[playerIndexPosition.row + 1][playerIndexPosition.col] &&
        playerIndexPosition.row < mapArray.length - 1
      ) {
        ctx.clearRect(playerPosition.x + 10, playerPosition.y + 10, 20, 20);
        playerPosition.y += 40;
        playerIndexPosition.row += 1;
        drawPlayer(playerPosition.x, playerPosition.y);
      }
      break;
  }
});
