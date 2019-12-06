import { player1, player2, playerTurn, setTurn } from "../index";
import { updateTurn, updateWeaponUI, updateHP } from "../component/dom";
const fightBtnEl = document.querySelector(".fight__btn");
const gameOverEl = document.createElement("p");
const fightBox = document.querySelector(".gameOver");

const startFight = (player1, player2, playerTurn) => {
  fightBtnEl.disabled = false;
};
fightBtnEl.addEventListener("click", () => {
  console.log(player1, player2);
  if (playerTurn === 1) {
    player2.updateHealth(player1.damage);
    updateHP(player2);
    setTurn(2);
    updateTurn(2);
    if (player2.health <= 0) {
      fightBtnEl.setAttribute("disabled", "true");
      gameOverEl.textContent = `Game Over, Player 1 wins`;
      fightBox.appendChild(gameOverEl);
    }
  } else if (playerTurn === 2) {
    player1.updateHealth(player2.damage);
    updateHP(player1);
    setTurn(1);
    updateTurn(1);
    if (player1.health <= 0) {
      fightBtnEl.setAttribute("disabled", "true");
      gameOverEl.textContent = `Game Over, Player 2 wins`;
      fightBox.appendChild(gameOverEl);
    }
  }
});
export default startFight;
