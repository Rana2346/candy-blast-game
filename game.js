const board = document.getElementById("game");

const width = 8;
const candyImages = [
  "🍬",
  "🍭",
  "🍫",
  "🍒",
  "🍓",
  "⭐"
];

let squares = [];

function createBoard() {

  for (let i = 0; i < width * width; i++) {

    let square = document.createElement("div");

    square.classList.add("candy");

    let randomCandy =
      candyImages[Math.floor(Math.random() * candyImages.length)];

    square.innerHTML = randomCandy;

    board.appendChild(square);
    squares.push(square);
  }

}

createBoard();
