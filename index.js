const choices = [rock,paper,scissors]

function getComputerChoice(choices) {

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
    return "It's a tie!";
  }

  if (winningCombinations[playerSelectionLower] === computerSelection.toLowerCase()) {
    return `You Win! ${playerSelection} beats ${computerSelection}`;
  }

  return `You Lose! ${computerSelection} beats ${playerSelection}`;
}
