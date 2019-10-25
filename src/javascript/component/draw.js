import { ctx } from "./map";
const drawPlayer = player => {
  ctx.beginPath();
  ctx.moveTo(player.position.x, player.position.y);
  ctx.fillStyle = player.color;
  ctx.fillRect(player.position.x + 10, player.position.y + 10, 20, 20);
};
const drawWeapon = weapon => {
  ctx.beginPath();
  // try triangle
  ctx.moveTo(weapon.canvasPosition.x + 20, weapon.canvasPosition.y + 10);
  ctx.lineTo(weapon.canvasPosition.x + 10, weapon.canvasPosition.y + 30);
  ctx.lineTo(weapon.canvasPosition.x + 30, weapon.canvasPosition.y + 30);
  ctx.closePath();
  ctx.fillStyle = weapon.color;
  ctx.fill();
};

export { drawPlayer, drawWeapon };
