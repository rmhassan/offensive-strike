const array = [{ row: 1, col: 2 }, { row: 2, col: 3 }];

console.log(
  array.findIndex(obj => {
    return obj.row === 2 && obj.col == 3;
  })
);
