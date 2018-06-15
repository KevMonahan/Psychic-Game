$(document).ready(function () {
    var wins = 0;
    var losses = 0;
    var letterArray = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
    var wrongGuesses = [];
    var guessesRemaining = 9;

    var computerGuess = "";
    var playerGuess = "";

    function findComputerGuess() {
        var randomNum = Math.floor(Math.random() * 26);

        computerGuess = letterArray[randomNum];
    }

    findComputerGuess();

    document.onkeyup = function (event) {
        var keyPress = event.key;
        playerGuess = keyPress;
        // if (lastKeyPressed == " ") {
        //     document.getElementById("here").innerHTML = currentString;
        //     currentString = "";
        //     } else if (lastKeyPressed.length === 1) {
        //         currentString += lastKeyPressed;
        //     }

        if (keyPress.length === 1 && letterArray.indexOf(playerGuess) !== -1) {



            if (wrongGuesses.indexOf(playerGuess) === -1) {
                if (playerGuess === computerGuess && guessesRemaining > 0) {
                    wins++;
                    $("#wins").html("<p>You have currently won " + wins + " times!</p>");
                    findComputerGuess();
                    guessesRemaining = 9;
                    wrongGuesses = [];
                }
                if (playerGuess !== computerGuess && guessesRemaining <= 0) {
                    losses++;
                    $("#losses").html("<p>You have currently lost " + losses + " times :(</p>");
                    guessesRemaining = 9;
                    findComputerGuess();
                    wrongGuesses = [];
                } else if (playerGuess !== computerGuess && guessesRemaining > 0) {
                    guessesRemaining--;
                    wrongGuesses.push(playerGuess);
                    $("#remainingGuesses").html("<p>You currently have " + guessesRemaining + " guesses remaining</p>");
                    $("#guessedLetters").html("<p>Letters already guessed include: " + wrongGuesses + "</p>");
                    playerGuess = "";

                }
            }



        }

    }




})