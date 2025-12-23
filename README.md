# Rock Paper Scissors

_**1 Player Rock-Paper-Scissors Game**_

---

### Computer

Randomly returns "Rock", "Paper" or "Scissors" for the current round.

###### Function _getComputerChoice_

- Use **Math.floor** and **Math.random** methods to return a integer value of either 0, 1 or 2.

---

### Player

- The player choices "Rock", "Paper" or "Scissors" for the current round.

###### Function _getPlayerChoice_

- Use **promt** method to get user's imput.
- Handle reprompting until a valid choice is entered.

---

### Game

###### Variables _computerScore_ and _playerScore_

- Use two varibales to keep track for the computer's and player's scores.
- Initial scores are 0.

###### Function _playRound_

- Use two parameters **computerChoice** and **playerChoice** as arguments to stimulate a single round.
- Write winning logic for the game:

1. _"Rock **smashes** Scissors"_
2. _"Paper **covers** Rock"_
3. _"Scissors **cuts** Paper"_

- Return round winner and increment winner's score.

###### Function _playGame_

- Stimulate multiple rounds, and first one to score 5 points is the winner.
- End game after the winner is declared.
