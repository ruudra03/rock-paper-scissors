// COMPUTER

function getComputerChoice() {
  // Get a random integer value between 0, 1 and 2 corresponding to "Rock", "Paper" and "Scissors" respectively
  let numOfChoices = 3; // Total possible choices in the game
  let randomInt = Math.floor(Math.random() * numOfChoices);

  // Determine computer's choice
  let computerChoice;

  if (randomInt === 0) {
    computerChoice = "Rock";
  } else if (randomInt === 1) {
    computerChoice = "Paper";
  } else {
    computerChoice = "Scissors";
  }

  // Return computer's choice
  return computerChoice;
}

// PLAYER

function getPlayerChoice() {
  // Get player's input through 1, 2 and 3 corresponding to "Rock", "Paper" and "Scissors" respectively
  let playerInput = parseInt(
    prompt("Enter 1 for Rock, 2 for Paper, and 3 for Scissors.")
  );

  // Determine player's choice
  let playerChoice;

  if (playerInput === 1) {
    playerChoice = "Rock";
  } else if (playerInput === 2) {
    playerChoice = "Paper";
  } else if (playerInput === 3) {
    playerChoice = "Scissors";
  }

  // Return player's choice
  return playerChoice;
}

// GAME

// Game scores
let computerScore = 0;
let playerScore = 0;

// Stimute one round of the game
function playRound(computerChoice, playerChoice) {
  // Determine round result
  let result;

  if (computerChoice === playerChoice) {
    result = "Draw!";
  } // Player is the loser
  else if (
    (computerChoice === "Rock" && playerChoice === "Scissors") ||
    (computerChoice === "Paper" && playerChoice === "Rock") ||
    (computerChoice === "Scissors" && playerChoice === "Paper")
  ) {
    // Increment computer's score
    computerScore++;
    result = `You lose! ${computerChoice} beats ${playerChoice}.`;
  } // Player is the winner
  else {
    // Increment player's score
    playerScore++;
    result = `You win! ${playerChoice} beats ${computerChoice}.`;
  }

  return roundResult;
}
