let playerscore = 0;
let computerscore = 0;
const scoremessage = document.getElementsByClassName('scoremessage')[0];

const rockbtn = document.getElementsByClassName('rockbtn')[0];
const paperbtn = document.getElementsByClassName('paperbtn')[0];
const scissorsbtn = document.getElementsByClassName('scissorsbtn')[0];

const playersign = document.getElementsByClassName('playersign')[0];
const computersign = document.getElementsByClassName('computersign')[0];

const restartgame = document.getElementsByClassName('restartgame')[0];

const playerscoreElement = document.getElementsByClassName('playerscore')[0];
const computerscoreElement = document.getElementsByClassName('computerscore')[0];

restartgame.addEventListener('click', restartGame);

rockbtn.addEventListener('click', () => handleClick('rock'));
paperbtn.addEventListener('click', () => handleClick('paper'));
scissorsbtn.addEventListener('click', () => handleClick('scissors'));

function handleClick(sign) {
  playersign.textContent = sign;
  const computerSelection = getComputerChoice();
  computersign.textContent = computerSelection;

  const result = playRound(sign, computerSelection);

  if (result === 'player') {
    playerscore++;
    scoremessage.textContent = 'You win this round!';
  } else if (result === 'computer') {
    computerscore++;
    scoremessage.textContent = 'You lose this round!';
  } else {
    scoremessage.textContent = "It's a tie!";
  }

  playerscoreElement.textContent = `PlayerScore: ${playerscore}`;
  computerscoreElement.textContent = `ComputerScore: ${computerscore}`;

  if (playerscore === 5 || computerscore === 5) {
    endGame();
  }
}

function getComputerChoice() {
  const choices = ['rock', 'paper', 'scissors'];
  const randomIndex = Math.floor(Math.random() * choices.length);
  return choices[randomIndex];
}

function playRound(playerSelection, computerSelection) {
  const winningCombinations = {
    rock: 'scissors',
    paper: 'rock',
    scissors: 'paper',
  };

  if (playerSelection === computerSelection) {
    return 'tie';
  }

  if (winningCombinations[playerSelection] === computerSelection) {
    return 'player';
  }

  return 'computer';
}

function endGame() {
  rockbtn.disabled = true;
  paperbtn.disabled = true;
  scissorsbtn.disabled = true;

  if (playerscore > computerscore) {
    scoremessage.textContent = 'Congratulations! You win the game!';
  } else if (playerscore < computerscore) {
    scoremessage.textContent = 'Sorry, you lose the game.';
  } else {
    scoremessage.textContent = 'The game ends in a tie.';
  }
}

function restartGame() {
  playerscore = 0;
  computerscore = 0;
  scoremessage.textContent = 'First to score 5 points wins the game';
  playersign.textContent = '❔';
  computersign.textContent = '❔';
  playerscoreElement.textContent = `PlayerScore: ${playerscore}`;
  computerscoreElement.textContent = `ComputerScore: ${computerscore}`;

  rockbtn.disabled = false;
  paperbtn.disabled = false;
  scissorsbtn.disabled = false;
}

scoremessage.textContent = 'First to score 5 points wins the game';
playerscoreElement.textContent = `PlayerScore: ${playerscore}`;
computerscoreElement.textContent = `ComputerScore: ${computerscore}`;