
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
