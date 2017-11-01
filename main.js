
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
    alert("The computer has " + computerScore + " points compared to your" + playerScore + " points. So Unlucky, the computer wins!");
  }

  clearScores();

}

function userChoice() {
 var playerChoice = prompt("Choose rock, paper, or scissors.");
   if(playerChoice === "rock" || playerChoice === "paper" || playerChoice === "scissors") {
     return playerChoice;
   }
  alert("You typed something else or did not spell your choice correctly please try again!");
  playerGuess();
}

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
