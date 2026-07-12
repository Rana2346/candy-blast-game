const board = document.getElementById("game");
const scoreDisplay = document.getElementById("score");

const width = 8;

const candies = [
  "🍬",
  "🍭",
  "🍫",
  "🍒",
  "⭐",
  "🍓"
];

let squares = [];
let score = 0;

function createBoard() {
  for (let i = 0; i < width * width; i++) {

    const square = document.createElement("div");

    square.classList.add("candy");

    let candy = candies[Math.floor(Math.random() * candies.length)];

    square.innerHTML = candy;
    square.setAttribute("data-candy", candy);

    board.appendChild(square);
    squares.push(square);
  }
}

function checkMatches() {

  for (let i = 0; i < squares.length - 2; i++) {

    let candy = squares[i].getAttribute("data-candy");

    if (
      i % width < width - 2 &&
      squares[i + 1].getAttribute("data-candy") === candy &&
      squares[i + 2].getAttribute("data-candy") === candy
    ) {

      score += 30;

      scoreDisplay.innerHTML = "Score: " + score;

      squares[i].innerHTML = "✨";
      squares[i + 1].innerHTML = "✨";
      squares[i + 2].innerHTML = "✨";
    }
  }
}

createBoard();
