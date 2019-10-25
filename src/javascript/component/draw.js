import { ctx } from "./map";
import { padding } from "../index";
const player1 = document.querySelector("#player1");
const drawPlayer = player => {
  setTimeout(() => {
    ctx.drawImage(
      player1,
      player.position.x + padding,
      player.position.y + padding,
      50,
      50
    );
  }, 500);
};
const drawWeapon = weapon => {
  console.log(weapon.img);
  ctx.drawImage(
    weapon.img,
    weapon.canvasPosition.x + 10,
    weapon.canvasPosition.y + 10,
    50,
    50
  );
  // // try triangle
  // ctx.moveTo(weapon.canvasPosition.x + 40, weapon.canvasPosition.y + 10);
  // ctx.lineTo(weapon.canvasPosition.x + 10, weapon.canvasPosition.y + 60);
  // ctx.lineTo(weapon.canvasPosition.x + 60, weapon.canvasPosition.y + 60);
  // ctx.closePath();
  // ctx.fillStyle = weapon.color;
  // ctx.fill();
};

export { drawPlayer, drawWeapon };
