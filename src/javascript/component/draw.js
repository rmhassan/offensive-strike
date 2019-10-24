import { ctx } from "./map";
const drawPlayer = (xPosition, yPosition) => {
  ctx.beginPath();
  ctx.moveTo(xPosition, yPosition);
  ctx.fillStyle = "#34495e";
  ctx.fillRect(xPosition + 10, yPosition + 10, 20, 20);
};
const drawWeapon = weapon => {
  ctx.beginPath();
  ctx.moveTo(weapon.canvasPosition.x + 10, weapon.canvasPosition.y + 10);
  if (weapon.id === 1) {
    ctx.fillStyle = "#27ae60";
  } else if (weapon.id === 2) {
    ctx.fillStyle = "#f39c12";
  } else if (weapon.id === 3) {
    ctx.fillStyle = "#8e44ad";
  } else if (weapon.id === 4) {
    ctx.fillStyle = "#c0392b";
  }
  ctx.fillRect(
    weapon.canvasPosition.x + 10,
    weapon.canvasPosition.y + 10,
    20,
    20
  );
};

export { drawPlayer, drawWeapon };
