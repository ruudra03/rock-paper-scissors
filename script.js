// DOM selectors for start game section, main game section, and results display inside game section
const startGameSection = document.querySelector(".startGame");
const gameSection = document.querySelector(".game");
const resultsDisplay = document.querySelector("#resultsDisplay");

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

let computerScore;
let playerScore;
let roundCounter;

// Number of points required to win the game
const pointsRequiredToWin = 5;

// Start Game function
function startGame() {
  // Unhide game section
  gameSection.style.visibility = "visible";

  // Initialise game scores at 0 and start with round 1 using updateScoreboard helper function
  computerScore = 0;
  playerScore = 0;
  roundCounter = 0;
  updateScoreboard();

  // Reset displays from the previous game
  if (computerHandDisplay.firstElementChild) {
    computerHandDisplay.removeChild(computerHandDisplay.firstElementChild);
  }

  if (playerHandDisplay.firstElementChild) {
    playerHandDisplay.removeChild(playerHandDisplay.firstElementChild);
  }

  resultsDisplay.textContent = "Pick a hand to begin ->";
}

// Select computer's and player's hand displays
const computerHandDisplay = document.querySelector("#computerChoiceDisplay");
const playerHandDisplay = document.querySelector("#playerChoiceDisplay");

// Create Rock, Paper and Scissors image elements for computer's and player's selections
const computerRockHandImg = document.createElement("img");
const computerPaperHandImg = document.createElement("img");
const computerScissorsHandImg = document.createElement("img");

const playerRockHandImg = document.createElement("img");
const playerPaperHandImg = document.createElement("img");
const playerScissorsHandImg = document.createElement("img");

// Set images sources, alt texts, and sizes
computerRockHandImg.src = "images/hand-rock-img.png";
computerPaperHandImg.src = "images/hand-paper-img.png";
computerScissorsHandImg.src = "images/hand-scissors-img.png";

playerRockHandImg.src = "images/hand-rock-img.png";
playerPaperHandImg.src = "images/hand-paper-img.png";
playerScissorsHandImg.src = "images/hand-scissors-img.png";

computerRockHandImg.alt = "Image of computer's hand signaling rock.";
computerPaperHandImg.alt = "Image of computer's hand signaling paper.";
computerScissorsHandImg.alt = "Image of computer's hand signaling scissors.";

playerRockHandImg.alt = "Image of player's hand signaling rock.";
playerPaperHandImg.alt = "Image of player's hand signaling paper.";
playerScissorsHandImg.alt = "Image of player's hand signaling scissors.";

// Select user input buttons
const userInputRockBtn = document.querySelector("#rockBtn");
const userInputPaperBtn = document.querySelector("#paperBtn");
const userInputScissorsBtn = document.querySelector("#scissorsBtn");

// Add event listeners for user input buttons
userInputRockBtn.addEventListener("click", () => {
  playPlayerChoice("Rock");

  // Remove any children from inside the display
  if (playerHandDisplay.firstElementChild) {
    playerHandDisplay.removeChild(playerHandDisplay.firstElementChild);
  }

  // Update the display
  playerHandDisplay.appendChild(playerRockHandImg);
});

userInputPaperBtn.addEventListener("click", () => {
  playPlayerChoice("Paper");

  // Remove any children from inside the display
  if (playerHandDisplay.firstElementChild) {
    playerHandDisplay.removeChild(playerHandDisplay.firstElementChild);
  }

  // Update the display
  playerHandDisplay.appendChild(playerPaperHandImg);
});

userInputScissorsBtn.addEventListener("click", () => {
  playPlayerChoice("Scissors");

  // Remove any children from inside the display
  if (playerHandDisplay.firstElementChild) {
    playerHandDisplay.removeChild(playerHandDisplay.firstElementChild);
  }

  // Update the display
  playerHandDisplay.appendChild(playerScissorsHandImg);
});

// Update game display's scorebaord
function updateScoreboard() {
  computerScoreDisplay.textContent = computerScore;
  playerScoreDisplay.textContent = playerScore;
  roundCounterDisplay.textContent = roundCounter;
}

// COMPUTER

function getComputerChoice() {
  // Get a random integer value between 0, 1 and 2 corresponding to "Rock", "Paper" and "Scissors" respectively
  let numOfChoices = 3; // Total possible choices in the game
  let randomInt = Math.floor(Math.random() * numOfChoices);

  // Determine computer's choice and update computer hand display for current round
  let computerChoice;

  // Remove any children from inside the display
  if (computerHandDisplay.firstElementChild) {
    computerHandDisplay.removeChild(computerHandDisplay.firstElementChild);
  }

  if (randomInt === 0) {
    computerChoice = "Rock";
    computerHandDisplay.appendChild(computerRockHandImg);
  } else if (randomInt === 1) {
    computerChoice = "Paper";
    computerHandDisplay.appendChild(computerPaperHandImg);
  } else if (randomInt === 2) {
    computerChoice = "Scissors";
    computerHandDisplay.appendChild(computerScissorsHandImg);
  }

  // Return computer's choice
  return computerChoice;
}

// PLAYER

function playPlayerChoice(playerChoice) {
  // Increment round counter
  roundCounter++;

  // Stimulate a round
  let result = playRound(getComputerChoice(), playerChoice);

  // Update score after the round
  updateScoreboard();

  // Display current round results
  resultsDisplay.textContent = result;

  // Check for game winner
  if (computerScore === 5) {
    alert("Sorry! You lost the game.");
    endGame();
  } else if (playerScore === 5) {
    alert("Congratulations! You won the game.");
    endGame();
  }
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

  return result;
}

// End the game after computer or the player wins
function endGame() {
  // Toggle section visibilities
  startGameSection.style.visibility = "visible";
  gameSection.style.visibility = "hidden";
}
