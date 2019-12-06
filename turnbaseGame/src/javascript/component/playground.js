const player1 = {
  row: 1,
  col: 2
};
const player2 = {
  row: 0,
  col: 2
};
let surrounding = [];
const playerSurroundings = (player, player2) => {
  let i = player.row - 1;
  let j = player.col - 1;
  for (j; j <= player.col + 1; j++) {
    console.log(player[i][j]);
    // if (
    //   player[i][j].row === player2.indexPosition.row &&
    //   player[i][j].col === player2.indexPosition.col
    // ) {
    //   console.log("player found");
    // }
  }
};
playerSurroundings(player1, player2);
