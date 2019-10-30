import { player1, player2, playerTurn, setTurn } from "../index";
const fightContainerEl = document.querySelector(".fight__container");
const playerTurnEl = document.querySelector(".fight__playerTurn");
const player1HealthEl = document.querySelector(".fight__player1-health");
const player2HealthEl = document.querySelector(".fight__player2-health");
const gameOver = document.querySelector(".fight__gameOver");
const fightBtnEl = document.querySelector(".fight__btn");

const startFight = (player1, player2, playerTurn) => {
  playerTurnEl.innerHTML = `${playerTurn}`;
  player1HealthEl.innerHTML = `${player1.health}`;
  player2HealthEl.innerHTML = `${player2.health}`;

  fightContainerEl.classList.add("show");
};
fightBtnEl.addEventListener("click", () => {
  console.log(player1, player2);
  if (playerTurn === 1) {
    let attackDamage = (player1.damage / 100) * 20;
    setTurn(2);
    player2.updateHealth(attackDamage);
    if (player2.health > 0) {
      startFight(player1, player2, 2);
    } else {
      fightBtnEl.disabled = false;
      gameOver.innerHTML = "<p>Game over Player 1 wins</p>";
    }
  } else if (playerTurn === 2) {
    let attackDamage = (player2.damage / 100) * 20;
    setTurn(1);
    player1.updateHealth(attackDamage);
    if (player1.health > 0) {
      startFight(player1, player2, 2);
    } else {
      fightBtnEl.disabled = false;
      gameOver.innerHTML = "<p>Game over Player 1 wins</p>";
    }
  }
});
export default startFight;
