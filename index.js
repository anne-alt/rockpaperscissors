
function getComputerChoice() {

    const choices = ['rock','paper','scissors']


    const randomIndex = Math.floor(Math.random() * choices.length)

    return choices[randomIndex]
}

const computerSelection = getComputerChoice()


function playRound(playerSelection, computerSelection) {
  const playerSelectionLower = playerSelection.toLowerCase();
  const winningCombinations = {
    rock: 'scissors',
    paper: 'rock',
    scissors: 'paper'
  };

  if (playerSelectionLower === computerSelection.toLowerCase()) {
    return "tie";
  }

  if (winningCombinations[playerSelectionLower] === computerSelection.toLowerCase()) {
    return "player";
  }

  return "computer";
}

function game() {
  let playerScore = 0;
  let computerScore = 0;

  for (let round = 1; round <= 5; round++) {
    const playerSelection = prompt("Enter your choice: Rock, Paper, or Scissors? ");
    const computerSelection = getComputerChoice();

    const result = playRound(playerSelection, computerSelection);
    console.log(`Round ${round}: Player chose ${playerSelection}, Computer chose ${computerSelection}`);

    if (result === "player") {
      playerScore++;
      console.log("You win this round!");
    } else if (result === "computer") {
      computerScore++;
      console.log("You lose this round!");
    } else {
      console.log("It's a tie!");
    }
  }

  console.log(`Final Score: Player ${playerScore} - ${computerScore} Computer`);

  if (playerScore > computerScore) {
    console.log("Congratulations! You win the game!");
  } else if (playerScore < computerScore) {
    console.log("Sorry, you lose the game.");
  } else {
    console.log("The game ends in a tie.");
  }
}


game();
