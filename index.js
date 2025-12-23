// COMPUTER

function getComputerChoice() {
  // Get a random integer value between 0, 1 and 2 corresponding to "Rock", "Paper" and "Scissors" respectively
  let randomInt = Math.floor(Math.random() * 3);

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

console.log(getComputerChoice());
console.log(getPlayerChoice());
