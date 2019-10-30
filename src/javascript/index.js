import "../sass/main.scss";
// import "./component/map";
import drawGrid, { mapArray, ctx } from "./component/map";
import { drawPlayer, drawWeapon } from "./component/draw";
import startFight from "./component/fight";
import Player from "./component/player";
import Weapons from "./component/weapons";

const p1 = document.querySelector("#player1");
const p2 = document.querySelector("#player2");
const coconut = document.querySelector("#coconut");
const lemon = document.querySelector("#lemon");
const donut = document.querySelector("#donut");
const cupcake = document.querySelector("#cupcake");
let playerTurn = 1;
let tileSize = 80;

const setTurn = value => {
  playerTurn = value;
};
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
  return weaponPosition.findIndex(weapon => {
    return (
      player1.indexPosition.row === weapon.indexPosition.row &&
      player1.indexPosition.col === weapon.indexPosition.col
    );
  });
};
/// Update weapon
const updateWeapon = (weaponIndex, player) => {
  let weapon = weaponPosition[weaponIndex];
  player.updatePlayerProperties(weapon.damage);
  player.updateWeaponState();

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

function areClose(a, b) {
  return (
    Math.abs(a.position.x - b.position.x) < 2 * tileSize &&
    Math.abs(a.position.y - b.position.y) < 2 * tileSize
  );
}
const moveLeft = player => {
  clearCell(player);
  player.position.x -= offset;
  player.indexPosition.col -= 1;
  if (areClose(player1, player2)) {
    startFight(player1, player2, playerTurn);
  }

  let weaponIndex = chkWeapon();
  if (weaponIndex > -1) {
    updateWeapon(weaponIndex, player);
  } else {
    drawPlayer(player);
  }
};
const moveUp = player => {
  clearCell(player);
  player.position.y -= offset;
  player.indexPosition.row -= 1;
  if (areClose(player1, player2)) {
    startFight(player1, player2, playerTurn);
  }

  let weaponIndex = chkWeapon();
  if (weaponIndex > -1) {
    updateWeapon(weaponIndex, player);
  } else {
    drawPlayer(player);
  }
};
const moveRight = player => {
  {
    clearCell(player);

    player.position.x += offset;
    player.indexPosition.col += 1;
    if (areClose(player1, player2)) {
      startFight(player1, player2, playerTurn);
    }

    let weaponIndex = chkWeapon();
    if (weaponIndex > -1) {
      updateWeapon(weaponIndex, player);
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
    if (areClose(player1, player2)) {
      startFight(player1, player2, playerTurn);
    }

    let weaponIndex = chkWeapon();
    if (weaponIndex > -1) {
      updateWeapon(weaponIndex, player);
    } else {
      drawPlayer(player);
    }
  }
};
// Event listener for the arrow keys
window.addEventListener("keydown", e => {
  switch (e.keyCode) {
    case arrowKeysCode.left:
      if (playerTurn === 1) {
        if (
          !mapArray[player1.indexPosition.row][player1.indexPosition.col - 1] &&
          player1.indexPosition.col > 0
        ) {
          playerTurn = 2;
          moveLeft(player1);
        } else {
          playerTurn = 1;
        }
      } else if (playerTurn === 2) {
        if (
          !mapArray[player2.indexPosition.row][player2.indexPosition.col - 1] &&
          player2.indexPosition.col > 0
        ) {
          playerTurn = 1;
          moveLeft(player2);
        } else {
          playerTurn = 2;
        }
      }
      break;
    case arrowKeysCode.up:
      if (playerTurn === 1) {
        if (
          !mapArray[player1.indexPosition.row - 1][player1.indexPosition.col] &&
          player1.indexPosition.row > 0
        ) {
          playerTurn = 2;
          moveUp(player1);
        } else {
          playerTurn = 1;
        }
      } else if (playerTurn === 2) {
        if (
          !mapArray[player2.indexPosition.row - 1][player2.indexPosition.col] &&
          player2.indexPosition.row > 0
        ) {
          playerTurn = 1;
          moveUp(player2);
        } else {
          playerTurn = 2;
        }
      }
      break;
    case arrowKeysCode.right:
      if (playerTurn === 1) {
        if (
          !mapArray[player1.indexPosition.row][player1.indexPosition.col + 1] &&
          player1.indexPosition.col <
            mapArray[player1.indexPosition.row].length - 1
        ) {
          playerTurn = 2;
          moveRight(player1);
        } else {
          playerTurn = 1;
        }
      } else if (playerTurn === 2) {
        if (
          !mapArray[player2.indexPosition.row][player2.indexPosition.col + 1] &&
          player2.indexPosition.col <
            mapArray[player2.indexPosition.row].length - 1
        ) {
          playerTurn = 1;
          moveRight(player2);
        } else {
          playerTurn = 2;
        }
      }
      break;
    case arrowKeysCode.down:
      if (playerTurn === 1) {
        if (
          !mapArray[player1.indexPosition.row + 1][player1.indexPosition.col] &&
          player1.indexPosition.row < mapArray.length - 1
        ) {
          playerTurn = 2;
          moveDown(player1);
        } else {
          playerTurn = 1;
        }
      } else if (playerTurn === 2) {
        if (
          !mapArray[player2.indexPosition.row + 1][player2.indexPosition.col] &&
          player2.indexPosition.row < mapArray.length - 1
        ) {
          playerTurn = 1;
          moveDown(player2);
        } else {
          playerTurn = 2;
        }
      }
      break;
  }
});

export { padding, player1, player2, playerTurn, setTurn };
