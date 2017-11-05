

function Word() {
	this.wordArray = ["aardwolf","kite","nudibranch","jaguarundi","coelacanth", "gibbon"];
	this.word = this.wordArray[Math.floor(Math.random() * this.wordArray.length)];
	this.letterArray = this.word.split("");
}

module.exports = Word;