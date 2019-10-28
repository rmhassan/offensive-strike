import "../sass/main.scss";
// import "./component/map";
import drawGrid, { mapArray, ctx } from "./component/map";
import { drawPlayer, drawWeapon } from "./component/draw";
import Player from "./component/player";
import Weapons from "./component/weapons";

const p1 = document.querySelector("#player1");
const p2 = document.querySelector("#player2");
const coconut = document.querySelector("#coconut");
const lemon = document.querySelector("#lemon");
const donut = document.querySelector("#donut");
const cupcake = document.querySelector("#cupcake");
let turn = 1;

const m4 = new Weapons(coconut, 90, 1);
const g3 = new Weapons(lemon, 60, 2);
const ump = new Weapons(cupcake, 50, 3);
const kar98 = new Weapons(donut, 95, 4);
const weaponPosition = [m4, g3, ump, kar98];

setTimeout(() => {
  drawWeapon(m4);
  drawWeapon(g3);
  drawWeapon(ump);
  drawWeapon(kar98);
}, 500);
const offset = 80;
const padding = 20;
let previousPosition = {
  canvasPosition: {
    x: 0,
    y: 0
  },
  indexPosition: {
    row: 0,
    col: 0
  }
};
const arrowKeysCode = {
  left: 37,
  up: 38,
  right: 39,
  down: 40
};

// Draw grid to canvas
drawGrid();

// Create new Player
const player1 = new Player(p1, 100);
const player2 = new Player(p2, 100);

// Clear cell when player leaves
const clearCell = player => {
  ctx.clearRect(player.position.x + 5, player.position.y + 5, 70, 70);
};
const chkWeapon = () => {
  console.log(previousPosition);

  return weaponPosition.findIndex(weapon => {
    return (
      player1.indexPosition.row === weapon.indexPosition.row &&
      player1.indexPosition.col === weapon.indexPosition.col
    );
  });
};
/// Update weapon
const updateWeapon = weaponIndex => {
  let weapon = weaponPosition[weaponIndex];
  player1.updatePlayerProperties(weapon.damage);

  // if (player1.hasWeapon) {
  //   // weaponPosition.push(player1.weapon);
  //   // weaponPosition.splice(weaponIndex, 1);
  //   player1.weapon.updateWeaponPosition(
  //     previousPosition.canvasPosition,
  //     previousPosition.indexPosition
  //   );
  //   drawPlayer(player1);
  //   drawWeapon(player1.weapon);
  //   player1.updatePlayerWeapon(weapon);
  // } else {
  //   player1.updateWeaponState();
  //   player1.updatePlayerWeapon(weapon);
  //   weaponPosition.splice(weaponIndex, 1);
  // }
};
// Draw player to canvas
drawPlayer(player1);
drawPlayer(player2);

const moveLeft = player => {
  clearCell(player);
  player.position.x -= offset;
  player.indexPosition.col -= 1;
  let weaponIndex = chkWeapon();
  if (weaponIndex > -1) {
    updateWeapon(weaponIndex, previousPosition);
  } else {
    drawPlayer(player);
  }
};
const moveUp = player => {
  clearCell(player);
  player.position.y -= offset;
  player.indexPosition.row -= 1;
  let weaponIndex = chkWeapon();
  if (weaponIndex > -1) {
    updateWeapon(weaponIndex, previousPosition);
  } else {
    drawPlayer(player);
  }
};
const moveRight = player => {
  {
    clearCell(player);

    player.position.x += offset;
    player.indexPosition.col += 1;
    let weaponIndex = chkWeapon();
    if (weaponIndex > -1) {
      updateWeapon(weaponIndex, previousPosition);
    } else {
      drawPlayer(player);
    }
  }
};
const moveDown = player => {
  {
    clearCell(player);

    player.position.y += offset;
    player.indexPosition.row += 1;
    let weaponIndex = chkWeapon();
    if (weaponIndex > -1) {
      updateWeapon(weaponIndex, previousPosition);
    } else {
      drawPlayer(player);
    }
  }
};
// Event listener for the arrow keys
window.addEventListener("keydown", e => {
  switch (e.keyCode) {
    case arrowKeysCode.left:
      if (turn === 1) {
        if (
          !mapArray[player1.indexPosition.row][player1.indexPosition.col - 1] &&
          player1.indexPosition.col > 0
        ) {
          moveLeft(player1);
          turn = 2;
        } else {
          turn = 1;
        }
      } else if (turn === 2) {
        if (
          !mapArray[player2.indexPosition.row][player2.indexPosition.col - 1] &&
          player2.indexPosition.col > 0
        ) {
          moveLeft(player2);
          turn = 1;
        } else {
          turn = 2;
        }
      }
      break;
    case arrowKeysCode.up:
      if (turn === 1) {
        if (
          !mapArray[player1.indexPosition.row - 1][player1.indexPosition.col] &&
          player1.indexPosition.row > 0
        ) {
          moveUp(player1);
          turn = 2;
        } else {
          turn = 1;
        }
      } else if (turn === 2) {
        if (
          !mapArray[player2.indexPosition.row - 1][player2.indexPosition.col] &&
          player2.indexPosition.row > 0
        ) {
          moveUp(player2);
          turn = 1;
        } else {
          turn = 2;
        }
      }
      break;
    case arrowKeysCode.right:
      if (turn === 1) {
        if (
          !mapArray[player1.indexPosition.row][player1.indexPosition.col + 1] &&
          player1.indexPosition.col <
            mapArray[player1.indexPosition.row].length - 1
        ) {
          moveRight(player1);
          turn = 2;
        } else {
          turn = 1;
        }
      } else if (turn === 2) {
        if (
          !mapArray[player2.indexPosition.row][player2.indexPosition.col + 1] &&
          player2.indexPosition.col <
            mapArray[player2.indexPosition.row].length - 1
        ) {
          moveRight(player2);
          turn = 1;
        } else {
          turn = 2;
        }
      }
      break;
    case arrowKeysCode.down:
      if (turn === 1) {
        if (
          !mapArray[player1.indexPosition.row + 1][player1.indexPosition.col] &&
          player1.indexPosition.row < mapArray.length - 1
        ) {
          moveDown(player1);
          turn = 2;
        } else {
          turn = 1;
        }
      } else if (turn === 2) {
        if (
          !mapArray[player2.indexPosition.row + 1][player2.indexPosition.col] &&
          player2.indexPosition.row < mapArray.length - 1
        ) {
          moveDown(player2);
          turn = 1;
        } else {
          turn = 2;
        }
      }
      break;
  }
});

export { padding };
