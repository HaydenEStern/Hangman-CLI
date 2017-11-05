var Word = require("./word");

function Letter(word) {
    this.letterObj = word.letterArray.reduce(function(acc, cur, i) {
        acc[i] = { index: i, letter: cur, guessed: false };
        return acc;
    }, []);
    this.hasWon = false;
    this.correctGuess = false;

};

Letter.prototype.checkWin = function() {
    var arr = [];
    this.letterObj.forEach(function(eachLetter) {
        arr.push(eachLetter.guessed);
        return arr;
    });
    arr.sort(function(a, b) {
        return a - b;
    });
    if (arr[0] === true) {
        this.hasWon = true;
    };
};

Letter.prototype.displayLetters = function() {
    this.letterObj.forEach(function(eachLetter) {
        if (eachLetter.guessed === false) {
            console.log("_ ");
        } else if (eachLetter.guessed === true) {
            console.log(eachLetter.letter + " ");
        }
    });
}

module.exports = Letter;