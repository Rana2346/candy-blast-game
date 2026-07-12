const colors = ["red", "blue", "green", "yellow", "purple"];
const board = document.getElementById("game");

let score = 0;

for (let i = 0; i < 64; i++) {
  let candy = document.createElement("div");
  candy.classList.add("candy");
  candy.style.background = colors[Math.floor(Math.random() * colors.length)];

  candy.onclick = function () {
    score += 10;
    document.getElementById("score").innerHTML =
      "Score: " + score;
  };

  board.appendChild(candy);
}
