import { ctx } from "./map";
const drawPlayer = player => {
  ctx.beginPath();
  ctx.moveTo(player.position.x, player.position.y);
  ctx.fillStyle = player.color;
  ctx.fillRect(player.position.x + 10, player.position.y + 10, 20, 20);
};
const drawWeapon = weapon => {
  ctx.beginPath();
  ctx.moveTo(weapon.canvasPosition.x + 10, weapon.canvasPosition.y + 10);
  ctx.fillStyle = weapon.color;

  // if (weapon.id === 1) {
  //   ctx.fillStyle = "#27ae60";
  // } else if (weapon.id === 2) {
  //   ctx.fillStyle = "#f39c12";
  // } else if (weapon.id === 3) {
  //   ctx.fillStyle = "#8e44ad";
  // } else if (weapon.id === 4) {
  //   ctx.fillStyle = "#c0392b";
  // }
  ctx.fillRect(
    weapon.canvasPosition.x + 10,
    weapon.canvasPosition.y + 10,
    20,
    20
  );
};

export { drawPlayer, drawWeapon };
