function getComputerChoice() {
  rand = Math.floor(Math.random() * 3);
  switch (rand) {
    case 0:
      return "rock"
    case 1:
      return "scissors"
    case 2:
      return "paper"
  }
}

function getHumanChoice() {
  return prompt("Enter a choice: rock, scissors or paper");
}

let humanScore = 0, computerScore = 0;

function playRound(humanChoice, computerChoice) {
  humanChoice = humanChoice.toLowerCase();

  if (humanChoice == computerScore) {
    console.log("Tie, you both chose the same!");
    return;
  }


  switch (humanChoice) {
    case "rock": {
      if (computerChoice == "paper") {
        computerScore += 1;
        console.log("You lose. Paper beats Rock");
        break;
      }

      console.log("You win! Rock beats " + computerChoice);
      humanScore += 1;
      break;
    }
    case "scissors": {
      if (computerChoice == "rock") {
        computerScore += 1;
        console.log("You lose. Rock beats Scissors");
        break;
      }

      console.log("You win! Scissors beats " + computerChoice);
      humanScore += 1;
      break;
    }
    case "paper": {
      if (computerChoice == "scissors") {
        computerScore += 1;
        console.log("You lose. Scissors beats Paper");
        break;
      }

      console.log("You win! Paper beats " + computerChoice);
      humanScore += 1;
      break;
    }
  }

}

function playGame() {
  for (i = 0; i < 5; ++i) {
    const humanSelection = getHumanChoice();
    const computerSelection = getComputerChoice();
    playRound(humanSelection, computerSelection);
  }

  if (humanScore == computerScore) {
    console.log("Tie, you both have the same score");
  }
  if (humanScore > computerScore) {
    console.log("You win! with a score of: " + humanScore);
  }
  else {
    console.log("You lose, Your score: " + humanScore + " Computer's score: " + computerScore);
  }
}

playGame();
