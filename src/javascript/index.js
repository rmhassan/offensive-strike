import "../sass/main.scss";
// import "./component/map";
import drawGrid, { mapArray, ctx } from "./component/map";
import Player from "./component/player";

const arrowKeysCode = {
  left: 37,
  up: 38,
  right: 39,
  down: 40
};
drawGrid();

const drawPlayer = (xPosition, yPosition) => {
  ctx.beginPath();
  ctx.moveTo(xPosition, yPosition);
  ctx.fillStyle = "#2f2f2f";
  ctx.fillRect(xPosition + 10, yPosition + 10, 20, 20);
  console.log("it ran");
};
const player1 = new Player();
console.log(player1);
drawPlayer(player1.position.x, player1.position.y);

window.addEventListener("keydown", e => {
  switch (e.keyCode) {
    case arrowKeysCode.left:
      if (
        !mapArray[player1.indexPosition.row][player1.indexPosition.col - 1] &&
        player1.indexPosition.col > 0
      ) {
        ctx.clearRect(player1.position.x + 10, player1.position.y + 10, 20, 20);
        player1.position.x -= 40;
        player1.indexPosition.col -= 1;
        drawPlayer(player1.position.x, player1.position.y);
      }
      break;
    case arrowKeysCode.up:
      if (
        !mapArray[player1.indexPosition.row - 1][player1.indexPosition.col] &&
        player1.indexPosition.row > 0
      ) {
        ctx.clearRect(player1.position.x + 10, player1.position.y + 10, 20, 20);
        player1.position.y -= 40;
        player1.indexPosition.row -= 1;
        drawPlayer(player1.position.x, player1.position.y);
      }
      break;
    case arrowKeysCode.right:
      if (
        !mapArray[player1.indexPosition.row][player1.indexPosition.col + 1] &&
        player1.indexPosition.col <
          mapArray[player1.indexPosition.row].length - 1
      ) {
        ctx.clearRect(player1.position.x + 10, player1.position.y + 10, 20, 20);
        player1.position.x += 40;
        player1.indexPosition.col += 1;
        drawPlayer(player1.position.x, player1.position.y);
      }
      break;
    case arrowKeysCode.down:
      if (
        !mapArray[player1.indexPosition.row + 1][player1.indexPosition.col] &&
        player1.indexPosition.row < mapArray.length - 1
      ) {
        ctx.clearRect(player1.position.x + 10, player1.position.y + 10, 20, 20);
        player1.position.y += 40;
        player1.indexPosition.row += 1;
        drawPlayer(player1.position.x, player1.position.y);
      }
      break;
  }
});
