import { player1, player2, playerTurn, setTurn } from "../index";
import { updateTurn, updateWeaponUI, updateHP } from "../component/dom";
const fightBtnEl = document.querySelector(".fight__btn");
const defendBtnEl = document.querySelector(".defend__btn");
const gameOverEl = document.createElement("p");
const fightBox = document.querySelector(".gameOver");
let playerOneDefend = false;
let playerTwoDefend = false;

const startFight = (player1, player2, playerTurn) => {
  fightBtnEl.disabled = false;
  defendBtnEl.disabled = false;
};
fightBtnEl.addEventListener("click", () => {
  if (playerTurn === 1) {
    if (playerTwoDefend) {
      console.log(player1.damage / 2);
      player2.updateHealth(player1.damage / 2);
      playerTwoDefend = !playerTwoDefend;
    } else {
      player2.updateHealth(player1.damage);
    }
    updateHP(player2);
    setTurn(2);
    updateTurn(2);
    if (player2.health <= 0) {
      fightBtnEl.setAttribute("disabled", "true");
      gameOverEl.textContent = `Game Over, Player 1 wins`;
      fightBox.appendChild(gameOverEl);
    }
  } else if (playerTurn === 2) {
    if (playerOneDefend) {
      player1.updateHealth(player2.damage / 2);
      playerOneDefend = !playerOneDefend;
    } else {
      player1.updateHealth(player2.damage);
    }
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
defendBtnEl.addEventListener("click", () => {
  if (playerTurn === 1) {
    playerOneDefend = true;
    setTurn(2);
    updateTurn(2);
  } else if (playerTurn === 2) {
    playerTwoDefend = true;
    setTurn(1);
    updateTurn(1);
  }
});
export default startFight;
