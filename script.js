const body = document.querySelector("body");
const btns = document.querySelectorAll(".btn");
const restartBtn = document.querySelector(".restart-btn");
const div = document.createElement("div");
const para = document.createElement("p");

function trimHumanSelection(str) {
  return str[0].toUpperCase() + str.slice(1).toLowerCase();
}

function lastRound() {
  para.classList.add("last-round");
  restartBtn.classList.remove("hidden");
}

function getComputerChoice() {
  const computerNumber = Math.floor(Math.random() * 3 + 1);
  if (computerNumber === 1) {
    return "Rock";
  } else if (computerNumber === 2) {
    return "Paper";
  } else {
    return "Scissors";
  }
}

let humanWinCounter = 0;
let computerWinCounter = 0;

function playRound(humanSelection, computerSelection) {
  humanSelection = trimHumanSelection(humanSelection);
  if (humanSelection === computerSelection)
    return `It's a tie, computer is as smart as human`;
  if (
    (humanSelection === "Rock" && computerSelection === "Paper") ||
    (humanSelection === "Paper" && computerSelection === "Scissors") ||
    (humanSelection === "Scissors" && computerSelection === "Rock")
  ) {
    computerWinCounter++;
    return `Computer Wins! ${computerSelection} beats ${humanSelection}`;
  } else {
    humanWinCounter++;
    return `Human Wins! ${humanSelection} beats ${computerSelection}`;
  }
}

function displayScore() {
  if (humanWinCounter === 5) {
    lastRound();
    return `Human reaches 5. Congrats! Overal score ${humanWinCounter}:${computerWinCounter}`;
  }
  if (computerWinCounter === 5) {
    lastRound();
    return `Computer reaches 5. Game over! Overal score ${computerWinCounter}:${humanWinCounter}`;
  }
  if (humanWinCounter > computerWinCounter) {
    return `Running score: Human - ${humanWinCounter}, Computer - ${computerWinCounter}`;
  } else if (humanWinCounter < computerWinCounter) {
    return `Running score: Computer - ${computerWinCounter}, Human - ${humanWinCounter}`;
  } else {
    return `Running score: Computer - ${computerWinCounter}, Human - ${humanWinCounter}`;
  }
}

btns.forEach((btn) =>
  btn.addEventListener("click", function (e) {
    if (humanWinCounter < 5 && computerWinCounter < 5) {
      const humanSelection = e.target.textContent;
      const computerSelection = getComputerChoice();
      div.textContent = playRound(humanSelection, computerSelection);
      para.textContent = displayScore();
      body.appendChild(div);
      body.appendChild(para);
    }
  })
);

restartBtn.addEventListener("click", function () {
  div.textContent = "";
  para.textContent = "";
  humanWinCounter = 0;
  computerWinCounter = 0;
  restartBtn.classList.add("hidden");
  para.classList.remove("last-round");
});
