import { ctx } from "./map";
import { padding } from "../index";
const drawPlayer = player => {
  setTimeout(() => {
    ctx.drawImage(
      player.img,
      player.position.x + padding,
      player.position.y + padding,
      50,
      50
    );
  }, 500);
};
const drawWeapon = weapon => {
  ctx.drawImage(
    weapon.img,
    weapon.canvasPosition.x + 10,
    weapon.canvasPosition.y + 10,
    50,
    50
  );
};

export { drawPlayer, drawWeapon };
