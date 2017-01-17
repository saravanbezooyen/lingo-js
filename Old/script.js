function Game(naam) {
	this.naam = naam;
	this.getRandomWoord = function() {
		return words[Math.floor((Math.random() * 479) + 1)];
	};
	this.randomWord = this.getRandomWoord();

}

var game = new Game('naam');
var randomWord = game.RandomWoord;
console.log(game.randomWord);

function wordChecker(word, int) {
	if (word == game.randomWord) {
        console.log("win");
	} else {
		if (word.charAt(int) == game.randomWord.charAt(int)) {
			return 11;
		} else {
			for (var i = 0; i < word.length; i++) {
				if (word.charAt(int) == game.randomWord.charAt(i)) {
					return 10;
				} else {
					return 0;
				}
			}
		}
	}
}

function layout(word) {
	for (var i = 0; i < word.length; i++) {
		switch(wordChecker(word, i)) {
			case 0:
				console.log('nee');
				break;
			case 11:
				console.log('in, ja');
				break;
			case 10:
				console.log('in, nee');
				break;
		}
	}
}

Array.prototype.random = function() {
    return this[Math.floor(Math.random() * this.length)];
  }

var game = new Game();