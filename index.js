// COMPUTER

function getComputerChoice() {
  // Number of choices in the game
  let maxChoices = 3;

  // Get a random integer
  let randomInt = Math.floor(Math.random() * maxChoices);

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

console.log(getComputerChoice());
