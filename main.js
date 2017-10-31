
var userChoice = prompt("Choose an Option (Rock, Paper Scissors)");
var computerChoice = Math.random();

if(computerChoice <= 0.33) {
  computerChoice = "Rock";
} else if (computerChoice<=0.67) {
  computerChoice = "Paper";
} else {
  computerChoice = "Scissors";
}
