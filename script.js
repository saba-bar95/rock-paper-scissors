let humanWinCounter = 0;
let computerWinCounter = 0;

function game() {
  for (let i = 0; i < 5; i++) {
    // Play rounds based on human's input and computer's random choice
    function playRound(humanSelection, computerSelection) {
      humanSelection = trimHumanSelection(humanSelection);

      if (humanSelection === computerSelection)
        return "It's a tie, computer is as smart as human";

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

    function trimHumanSelection(string) {
      return string[0].toUpperCase() + string.slice(1).toLowerCase();
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

    const humanSelection = prompt(
      "What is human's choice: rock, paper or scissors?"
    );
    const computerSelection = getComputerChoice();
    console.log(playRound(humanSelection, computerSelection));
  }

  if (humanWinCounter > computerWinCounter) {
    console.log(`Human won: ${humanWinCounter} to ${computerWinCounter}`);
  } else if (humanWinCounter < computerWinCounter) {
    console.log(`Computer won: ${computerWinCounter} to ${humanWinCounter}`);
  } else {
    console.log(
      `It's a tie. The score is ${humanWinCounter}:${computerWinCounter} `
    );
  }
}
game();
