import "../sass/main.scss";
// import "./component/map";
import drawGrid, { mapArray, ctx } from "./component/map";
import { drawPlayer, drawWeapon } from "./component/draw";
import Player from "./component/player";
import Weapons from "./component/weapons";

const m4 = new Weapons("#27ae60", 90, 1);
const g3 = new Weapons("#f39c12", 60, 2);
const ump = new Weapons("#8e44ad", 50, 3);
const kar98 = new Weapons("#c0392b", 95, 4);
const weaponPosition = [m4, g3, ump, kar98];
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
const player1 = new Player("#34495e", 100);

const chkWeapon = () => {
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
  player1.updatePlayerProperties(weapon.color, weapon.damage);
  // if (player1.hasWeapon) {
  //   weaponPosition.push(player1.weapon);
  //   weaponPosition.splice(weaponIndex, 1);
  //   player1.weapon.updateWeaponPosition(
  //     player1.position,
  //     player1.indexPosition
  //   );
  //   drawPlayer(player1);
  //   drawWeapon(player1.weapon);
  //   player1.updatePlayerWeapon(weapon);
  // } else {
  //   player1.updateWeaponState();
  //   player1.updatePlayerWeapon(weapon);
  //   weaponPosition.splice(weaponIndex, 1);
  //   console.log(weaponPosition);
  // }
};
// Draw player to canvas
drawPlayer(player1);

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
        let weaponIndex = chkWeapon();
        if (weaponIndex > -1) {
          updateWeapon(weaponIndex);
          drawPlayer(player1);
        } else {
          drawPlayer(player1);
        }
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
        let weaponIndex = chkWeapon();
        if (weaponIndex > -1) {
          updateWeapon(weaponIndex);
          drawPlayer(player1);
        } else {
          drawPlayer(player1);
        }
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
        let weaponIndex = chkWeapon();
        if (weaponIndex > -1) {
          updateWeapon(weaponIndex);
          drawPlayer(player1);
        } else {
          drawPlayer(player1);
        }
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
        let weaponIndex = chkWeapon();
        if (weaponIndex > -1) {
          updateWeapon(weaponIndex);
          drawPlayer(player1);
        } else {
          drawPlayer(player1);
        }
      }
      break;
  }
});
