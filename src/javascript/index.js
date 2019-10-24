import "../sass/main.scss";
// import "./component/map";
import drawGrid, { mapArray, ctx } from "./component/map";
import { drawPlayer, drawWeapon } from "./component/draw";
import Player from "./component/player";
import Weapons from "./component/weapons";

const m4 = new Weapons(90, 1);
const g3 = new Weapons(60, 2);
const ump = new Weapons(50, 3);
const kar98 = new Weapons(95, 4);
const weaponPosition = [m4, g3, ump, kar98];
console.log(weaponPosition);
drawWeapon(m4);
drawWeapon(g3);
drawWeapon(ump);
drawWeapon(kar98);

const arrowKeysCode = {
  left: 37,
  up: 38,
  right: 39,
  down: 40
};

// Draw grid to canvas
drawGrid();

// Create new Player
const player1 = new Player();

const chkWeapon = () => {
  return weaponPosition.findIndex(weapon => {
    console.log(weapon, player1.indexPosition);
    return (
      player1.indexPosition.row === weapon.row &&
      player1.indexPosition.col === weapon.col
    );
  });
};
// Draw player to canvas
drawPlayer(player1.position.x, player1.position.y);

// Event listener for the arrow keys
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
