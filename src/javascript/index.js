import "../sass/main.scss";
// import "./component/map";
import drawGrid, { mapArray, ctx } from "./component/map";
import { drawPlayer, drawWeapon } from "./component/draw";
import startFight from "./component/fight";
import Player from "./component/player";
import Weapons from "./component/weapons";
import { updateWeaponUI, updateTurn } from "./component/dom";

const p1 = document.querySelector("#player1");
const p2 = document.querySelector("#player2");
const knife = document.querySelector("#knife");

let playerTurn = 1;
let tileSize = 80;

const setTurn = value => {
  playerTurn = value;
};
const m4 = new Weapons(knife, 20, 1);
const g3 = new Weapons(knife, 10, 2);
const ump = new Weapons(knife, 50, 3);
const kar98 = new Weapons(knife, 40, 4);
const weaponPosition = [m4, g3, ump, kar98];

setTimeout(() => {
  drawWeapon(m4);
  drawWeapon(g3);
  drawWeapon(ump);
  drawWeapon(kar98);
}, 500);
const offset = 80;
const padding = 20;
let oldWeapon = {
  indexPosition: {
    row: 0,
    col: 0
  }
};
let p1PreviousPosition = {
  canvasPosition: {
    x: 0,
    y: 0
  },
  indexPosition: {
    row: 0,
    col: 0
  }
};
let p2PreviousPosition = {
  canvasPosition: {
    x: 0,
    y: 0
  },
  indexPosition: {
    row: 0,
    col: 0
  }
};
const drawOldWeapon = (weapon, player) => {
  if (player.id === 1) {
    if (
      weapon.indexPosition.row === p1PreviousPosition.indexPosition.row &&
      weapon.indexPosition.col === p1PreviousPosition.indexPosition.col
    ) {
      drawWeapon(weapon);
    }
  } else if (player.id === 2) {
    if (
      weapon.indexPosition.row === p2PreviousPosition.indexPosition.row &&
      weapon.indexPosition.col === p2PreviousPosition.indexPosition.col
    ) {
      drawWeapon(weapon);
    }
  }
};

const updateOldWeaponPosition = (weapon, player) => {
  weapon.canvasPosition = {
    x: player.position.x,
    y: player.position.y
  };
  weapon.indexPosition = {
    row: player.indexPosition.row,
    col: player.indexPosition.col
  };
};
const maintainPreviousPosition = player => {
  if (player.id === 1) {
    p1PreviousPosition.canvasPosition = {
      x: player.position.x,
      y: player.position.y
    };
    p1PreviousPosition.indexPosition = {
      row: player.indexPosition.row,
      col: player.indexPosition.col
    };
  } else if (player.id === 2) {
    p2PreviousPosition.canvasPosition = {
      x: player.position.x,
      y: player.position.y
    };
    p2PreviousPosition.indexPosition = {
      row: player.indexPosition.row,
      col: player.indexPosition.col
    };
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
const player1 = new Player(1, p1);
const player2 = new Player(2, p2);

// Clear cell when player leaves
const clearCell = player => {
  ctx.clearRect(player.position.x + 5, player.position.y + 5, 70, 70);
};
const chkWeapon = player => {
  return weaponPosition.findIndex(weapon => {
    return (
      player.indexPosition.row === weapon.indexPosition.row &&
      player.indexPosition.col === weapon.indexPosition.col
    );
  });
};
/// Update weapon
const updateWeapon = (weaponIndex, player) => {
  let weapon = weaponPosition[weaponIndex];
  player.updatePlayerProperties(weapon.damage);
  updateWeaponUI(player);

  if (player.hasWeapon) {
    oldWeapon = player.weapon;
    updateOldWeaponPosition(oldWeapon, player);
    weaponPosition.push(oldWeapon);
    weaponPosition.splice(weaponIndex, 1);
    player.updatePlayerWeapon(weapon);
  } else {
    weaponPosition.splice(weaponIndex, 1);
    player.updateWeaponState();
    player.updatePlayerWeapon(weapon);
  }
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
  maintainPreviousPosition(player);
  clearCell(player);
  player.moveLeft();
  if (areClose(player1, player2)) {
    startFight(player1, player2, playerTurn);
  }

  let weaponIndex = chkWeapon(player);
  if (weaponIndex > -1) {
    updateWeapon(weaponIndex, player);
    drawPlayer(player);
  } else {
    drawPlayer(player);
  }
  drawOldWeapon(oldWeapon, player);
};
const moveUp = player => {
  maintainPreviousPosition(player);
  clearCell(player);

  player.moveUp();

  if (areClose(player1, player2)) {
    startFight(player1, player2, playerTurn);
  }

  let weaponIndex = chkWeapon(player);
  if (weaponIndex > -1) {
    updateWeapon(weaponIndex, player);
    drawPlayer(player);
  } else {
    drawPlayer(player);
  }
  drawOldWeapon(oldWeapon, player);
};
const moveRight = player => {
  {
    maintainPreviousPosition(player);
    clearCell(player);

    player.moveRight();
    if (areClose(player1, player2)) {
      startFight(player1, player2, playerTurn);
    }

    let weaponIndex = chkWeapon(player);
    if (weaponIndex > -1) {
      updateWeapon(weaponIndex, player);
      drawPlayer(player);
    } else {
      drawPlayer(player);
    }
    drawOldWeapon(oldWeapon, player);
  }
};
const moveDown = player => {
  {
    maintainPreviousPosition(player);
    clearCell(player);
    player.moveDown();

    if (areClose(player1, player2)) {
      startFight(player1, player2, playerTurn);
    }

    let weaponIndex = chkWeapon(player);
    if (weaponIndex > -1) {
      updateWeapon(weaponIndex, player);
      drawPlayer(player);
    } else {
      drawPlayer(player);
    }
    drawOldWeapon(oldWeapon, player);
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
          updateTurn(playerTurn);
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
          updateTurn(playerTurn);

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
          updateTurn(playerTurn);

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
          updateTurn(playerTurn);

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
          updateTurn(playerTurn);

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
          updateTurn(playerTurn);

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
          updateTurn(playerTurn);

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
          updateTurn(playerTurn);

          moveDown(player2);
        } else {
          playerTurn = 2;
        }
      }
      break;
  }
});

export { padding, player1, player2, playerTurn, setTurn };
