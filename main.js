
var playerScore = 0;
var computerScore = 0;

//start of game
function Game(numOfRounds) {

  do {
    var player  = userChoice();
    var computer = computerChoice();
    var result = compare (player, computer);
    updateScores(result, 1);
    if(result !== 0) {
      numOfRounds--;
    }
  }while(numOfRounds > 0);

  if(playerScore > computerScore) {
    alert("You have " + playerScore + " points compared to the computer's " + computerScore + " points. So You win!");
  }
  else {
    alert("The computer has " + computerScore + " points compared to your " + playerScore + " points. So Unlucky, the computer wins!");
  }

  clearScores();

}

//user choice
function userChoice() {
 var playerChoice = prompt("Choose rock, paper, or scissors.");
   if(playerChoice === "rock" || playerChoice === "paper" || playerChoice === "scissors") {
     return playerChoice;
   }
  alert("You typed something else or did not spell your choice correctly please try again!");
  playerGuess();
}

//computer random choice
function computerChoice() {
  var choice = Math.random();
  if(choice < 0.34) {
    return "rock";
  }
  if(choice <= 0.67) {
    return "paper";
  }
  return "scissors";
}

//Comparison of the two choices
function compare(choice1, choice2) {
  alert("Player chose: " + choice1 + " and the computer chose: " + choice2 + "!");

  if(choice1 === choice2) {
    alert("You and the computer guessed the same thing! Go again, no score added!");
    return 0;
  }
  if(
    (choice1 === "rock" && choice2 === "scissors")
                       ||
    (choice1 === "paper" && choice2 === "rock")
                       ||
    (choice1 === "scissors" && choice2 === "paper"))
    {
   alert("Player wins the round!");
    return 1;
    }
   alert("Computer wins the round!");
   return 2;
}

//updating the scores
function updateScores(result, points) {
    if(result === 1) {
      playerScore += points;
    }
    if(result === 2) {
      computerScore += points;
    }
    if(result === 0) {
      computerScore += 0;
      playerScore += 0;
    }
}
//clears the scores
function clearScores() {
  playerScore = 0;
  computerScore = 0;
}


Game(5);
