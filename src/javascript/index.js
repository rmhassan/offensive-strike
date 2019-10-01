import "../sass/main.scss";

import grid from "./component/map";
const keys = {
  left: 37,
  up: 38,
  right: 39,
  down: 40
};
grid(16, 16);
let circle = document.createElement("div");
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
      console.log("left ");
      break;
    case keys.up:
      console.log("up ");
      break;

    case keys.right:
      moveRight(e);
      break;

    case keys.down:
      console.log("down ");
      break;
  }
}
window.addEventListener("keydown", handleKey);
