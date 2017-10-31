//
// var userChoice = prompt("Choose an Option (Rock, Paper Scissors)");
// var computerChoice = Math.random();
//
// if(computerChoice <= 0.33) {
//   computerChoice = "Rock";
// } else if (computerChoice<=0.67) {
//   computerChoice = "Paper";
// } else {
//   computerChoice = "Scissors";
// }


function compare(choice1,choice2) {
  if(choice1 === choice2) {
    return ('The Result is a Tie!')
  }
   //Scenario of Rock
  if(choice1 === "Rock") {
    if (choice2 === "Scissors") {
      return ('Rock Wins!');
    } else {
      return ('Paper Wins!');
    }
  } //Scenario of Paper
  if(choice1 === "Paper") {
    if (choice2 === "Scissors") {
      return ('Scissors Wins!');
    } else {
      return ('Paper Wins!');
    }
  } //Scenario of Scissors
  if(choice1 === "Scissors") {
    if (choice2 === "Paper") {
      return ('Scissors Wins!');
  } else {
    return ('Rock Wins!');
  }
}


}
