const p1DamageEl = document.querySelector(".player1-damage");
const p2DamageEl = document.querySelector(".player2-damage");
const p1WeaponEl = document.querySelector(".player1-weapon");
const p2WeaponEl = document.querySelector(".player2-weapon");
const playerTurnEl = document.querySelector(".player__turn");
const updatePlayer1HP = document.querySelector(".player1-hp");
const updatePlayer2HP = document.querySelector(".player2-hp");

const updateHP = player => {
  if (player.id === 1) {
    updatePlayer1HP.textContent = `${player.health}`;
  } else if (player.id === 2) {
    updatePlayer2HP.textContent = `${player.health}`;
  }
};
const updateWeaponUI = player => {
  console.log(player.weapon);
  if (player.id === 1) {
    p1DamageEl.textContent = `${player.damage}`;
    p1WeaponEl.innerHTML = player.weapon.img.outerHTML;
  } else if (player.id === 2) {
    p2DamageEl.textContent = `${player.damage}`;
    p2WeaponEl.innerHTML = player.weapon.img.outerHTML;
  }
};

const updateTurn = turn => {
  playerTurnEl.textContent = `${turn}`;
};
export { updateWeaponUI, updateTurn, updateHP };
