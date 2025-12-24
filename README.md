# Rock Paper Scissors

> **1 Player Rock-Paper-Scissors Game**

---

### Computer

Randomly returns "Rock", "Paper" or "Scissors" for the current round.

#### Function _getComputerChoice_

- Use **Math.floor** and **Math.random** methods to return a integer value of either 0, 1 or 2.
- Display choice on the screen.

---

### Player

The player chooses "Rock", "Paper" or "Scissors" for the current round using buttons.

#### Function _getPlayerChoice_

- Use event listeners to get user's input of "Rock", "Paper" or "Scissors" for the current round.

---

### Game

#### Variables _computerScore_ and _playerScore_

- Use two varibales to keep track for the computer's and player's scores respectively.
- Display running scores on the screen.

#### Function _playRound_

- Use two parameters **computerChoice** and **playerChoice** as arguments to stimulate a single round.
- Write winning logic for the game:

1. _"Rock **smashes** Scissors"_
2. _"Paper **covers** Rock"_
3. _"Scissors **cuts** Paper"_

- Increment winner's score and return round winner.
- Display round result on the screen.

#### Function _playGame_

- Initialise computer's and player's scores with 0.
- Stimulate multiple rounds, where first one to score 5 points is the winner.
- Announce the game winner on the screen.
