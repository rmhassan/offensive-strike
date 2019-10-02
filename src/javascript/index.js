import "../sass/main.scss";

import createGrid from "./component/map";
let circle = document.createElement("div");
let position = { x: 0, y: 0 };
const keys = {
  left: 37,
  up: 38,
  right: 39,
  down: 40
};
createGrid(16, 16);
circle.style.width = "20px";
circle.style.height = "20px";
circle.style.backgroundColor = "#000";
let firstGridItem = document.querySelector(".grid-item");
firstGridItem.appendChild(circle);
let gridNodes = document.querySelectorAll(".grid-item");
let gridArray = Array.from(gridNodes);
function moveRight(e) {
  console.log(gridArray);
}
function handleKey(e) {
  switch (e.keyCode) {
    case keys.left:
      position.y--;
      break;
    case keys.up:
      position.x--;
      break;

    case keys.right:
      position.y++;
      break;

    case keys.down:
      position.x++;
      break;
  }
  let gridItem = document.querySelector(
    ".grid-item-" + position.x + "" + position.y
  );
  gridItem.appendChild(circle);
}
window.addEventListener("keydown", handleKey);
