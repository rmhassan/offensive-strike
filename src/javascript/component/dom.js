import { playerTurn } from "..";

const p1DamageEl = document.querySelector(".player1-damage");
const p2DamageEl = document.querySelector(".player2-damage");
const playerTurnEl = document.querySelector(".player__turn");
const updateWeaponUI = player => {
  if (player.id === 1) {
    p1DamageEl.textContent = `${player.damage}`;
  } else if (player.id === 2) {
    p2DamageEl.textContent = `${player.damage}`;
  }
};

const updateTurn = turn => {
  playerTurnEl.textContent = `${turn}`;
};
export { updateWeaponUI, updateTurn };
