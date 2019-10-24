import { mapArray } from "./map";
let min = 0;
let max = 9;
const randomNumber = () => Math.floor(Math.random() * (max - min + 1)) + min;
export default class Weapons {
  constructor(color, damage, id) {
    this.color = color;
    this.damage = damage;
    this.id = id;
    this.canvasPosition = {
      x: 0,
      y: 0
    };
    this.indexPosition = {
      row: 0,
      col: 0
    };
    this.init = () => {
      // Get random row and col indexes for they player position
      let rowPosition = randomNumber();
      let colPosition = randomNumber();
      // Check if the cell is blocked or not
      if (!mapArray[rowPosition][colPosition]) {
        // Check if it is first row
        if (rowPosition > 0) {
          // if the row is greater than one increment y pointer 40*noOfRows
          for (let i = 0; i < rowPosition; i++) {
            this.canvasPosition.y += 40;
          }
        }
        // Check if it is first col
        if (colPosition > 0) {
          // if the col is greater than one increment x pointer 40*noOfCols
          for (let j = 0; j < colPosition; j++) {
            this.canvasPosition.x += 40;
          }
        }
        // Updating player index position
        this.indexPosition.row = rowPosition;
        this.indexPosition.col = colPosition;
      } else {
        // If 'if' condition fails this function will be called again. Recursive function
        return this.init();
      }
    };
    this.init();
  }
}
