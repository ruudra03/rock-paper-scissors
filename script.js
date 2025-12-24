// DOM selectors for start game and main game sections
const startGameSection = document.querySelector(".startGame");
const gameSection = document.querySelector(".game");

// Get score counters and current round counter elements in DOM
const computerScoreDisplay = document.querySelector("#computerScore");
const playerScoreDisplay = document.querySelector("#playerScore");
const roundCounterDisplay = document.querySelector("#roundCounter");

// Start game event listener
const startGameBtn = startGameSection.firstElementChild;
startGameBtn.addEventListener("click", () => {
  // Hide start game section
  startGameSection.style.visibility = "hidden";

  // Begin the game
  startGame();
});

// Start Game function
function startGame() {
  // Unhide game section
  gameSection.style.visibility = "visible";

  // Initialise game scores at 0 and start with round 1 using updateScoreboard helper function
  let computerScore = 0;
  let playerScore = 0;
  let roundCounter = 1;
  updateScoreboard(computerScore, playerScore, roundCounter);
}

// Update game display's scorebaord
function updateScoreboard(computerScore, playerScore, roundCounter) {
  computerScoreDisplay.textContent = computerScore;
  playerScoreDisplay.textContent = playerScore;
  roundCounterDisplay.textContent = roundCounter;
}

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
