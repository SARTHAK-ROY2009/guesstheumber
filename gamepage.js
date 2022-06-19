// random value generated
var y = Math.floor(Math.random() * 10 + 1);
// counting the number of guesses
// made for correct Guess

// function for number guessed by user     
var x = document.getElementById("guessField").value;

function submit() {
    if (x == y) {
        alert("Congratulations!!!" + playername + " You guessed it right in" +
            guess + " GUESS ");
        guess = 1;
    } else if (x > y) {
        guess++;
        alert("Oops sorry!! Try a smaller number");
    } else {
        guess++;
        alert("Oops sorry!! Try a greater number");
    }
}

function playAgain() {
    y = Math.floor(Math.random() * 10 + 1);
}