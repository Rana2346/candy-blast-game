const board = document.getElementById("game");
const scoreDisplay = document.getElementById("score");

const width = 8;
const colors = ["red", "blue", "green", "yellow", "purple"];
let squares = [];
let score = 0;

function createBoard() {
  for (let i = 0; i < width * width; i++) {
    const square = document.createElement("div");
    square.classList.add("candy");
    let color = colors[Math.floor(Math.random() * colors.length)];
    square.style.background = color;
    square.setAttribute("data-color", color);
    board.appendChild(square);
    squares.push(square);
  }
}

function checkMatches() {
  for (let i = 0; i < squares.length; i++) {
    let color = squares[i].getAttribute("data-color");

    if (
      i % width < width - 2 &&
      squares[i + 1].getAttribute("data-color") === color &&
      squares[i + 2].getAttribute("data-color") === color
    ) {
      score += 30;
      scoreDisplay.innerHTML = "Score: " + score;

      squares[i].style.background = "white";
      squares[i + 1].style.background = "white";
      squares[i + 2].style.background = "white";
    }
  }
}

createBoard();

setInterval(checkMatches, 1000);
