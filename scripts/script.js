var game = document.getElementById('game-input');

for (var i = 0; i < 5; i++) {
	var section = document.createElement('section');
	game.appendChild(section);

	for (var x = 0; x < 5; x++){
		var input = document.createElement('input');
		section.appendChild(input);
	}
}

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
	for (var j = 0; j < word.length; j++) {
		if (word == game.randomWord) {
	        console.log("win");
		} else {
			if (word.charAt(x) == game.randomWord.charAt(x)) {
				 console.log('in, ja');
			} else {
				for (var i = 0; i < word.length; i++) {
					if (word.charAt(x) == game.randomWord.charAt(i)) {
						 console.log('in, nee');
					} else {
						 console.log('nee');
					}
				}
			}
		}
	}
}

Array.prototype.random = function() {
    return this[Math.floor(Math.random() * this.length)];
  }

var game = new Game();