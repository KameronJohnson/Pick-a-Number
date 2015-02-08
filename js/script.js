var randomNumber = getRandomNumber(10);
var guess;
var guessCount = 0;
var correctGuess = false;

function getRandomNumber( upper ) {
  var num = Math.floor(Math.random() * upper) + 1;
  return num;
}

do {
  guess = prompt("I am thinking of a number between 1 and 10...");
  guessCount += 1;
  if ( parseInt(guess) === randomNumber ) {
    correctGuess = true;
  }
} while ( ! correctGuess )
  document.write("<h1>YOU GUESSED IT!</h1>");
  document.write("<h2>It took you " + guessCount + " tries to guess the number " + randomNumber + ".</h2>");
  document.write("<h3>You may now pat yourself on the back.</h3>");
