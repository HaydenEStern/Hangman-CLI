var inquirer = require("inquirer"),
    Word = require("./word"),
    Letter = require("./letter");

var gameWord, letters, guesses;


function startGame() {
	console.log("WEIRD ANIMAL HANGMAN");
    gameWord = new Word;
    letters = new Letter(gameWord);
    guesses = 10;
    console.log("Guesses Remaining: " + guesses);
    letters.displayLetters();
    guessLetter();

}

function guessLetter() {
    inquirer.prompt([{
        type: "input",
        message: "Enter Letter",
        name: "guess"
    }]).then(function(answers) {
        // search the existing letters for the guessed letters, push guessed letters to guessed letters, replace letter if correct,
        // subtract from guesses
        guesses--;
        console.log("Guesses Remaining: " + guesses);
        letters.letterObj.forEach(function(eachLetter) {
            if (eachLetter.letter === answers.guess) {
                eachLetter.guessed = true;
                letters.displayLetters();
                letters.checkWin();
                console.log("You guessed correctly!");
                letters.correctGuess = true;
            };

        });
        if (letters.correctGuess === false) {
            console.log("Sorry, try again");
        }

        if (guesses > 0 && letters.hasWon === false) {
            letters.correctGuess = false;
            guessLetter();
        } else if ((guesses === 0 && letters.hasWon === true) || (guesses > 0 && letters.hasWon === true)) {
            inquirer.prompt([{
                type: "confirm",
                message: "CONGRATS YOU WON!!!!!\n Would you like to play again?",
                name: "confirm"
            }]).then(function(answers) {
                if (answers.confirm === true) {
                    letters.correctGuess = false;
                    startGame();
                }

            });
        } else if (guesses === 0 && letters.hasWon === false) {
            inquirer.prompt([{
                type: "confirm",
                message: "You lost. Would you like to play again?",
                name: "confirm"
            }]).then(function(answers) {
                if (answers.confirm === true) {
                    letters.correctGuess = false;
                    startGame();
                }

            });
        }

    })
}


startGame();