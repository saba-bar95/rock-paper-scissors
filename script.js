const body = document.querySelector("body");
const btns = document.querySelectorAll(".btn");

function trimHumanSelection(str) {
  return str[0].toUpperCase() + str.slice(1).toLowerCase();
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
  if (humanWinCounter === 5)
    return `Human reaches 5. Game over! Overal score ${humanWinCounter}:${computerWinCounter}`;
  if (computerWinCounter === 5)
    return `Computer reaches 5. Game over! Overal score ${computerWinCounter}:${humanWinCounter}`;

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
      const div = document.createElement("div");
      div.style.marginLeft = "100px";
      const para = document.createElement("p");
      div.textContent = playRound(humanSelection, computerSelection);
      para.textContent = displayScore();
      body.appendChild(div);
      body.appendChild(para);
    }
  })
);
