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

//Als eerste check je of de gebruiker het woord geraden heeft. 
//Zo niet dan kijk je of de letter er in voorkomt en mocht dat het geval zijn dan pas, of het woord ook op de juiste plek staat.

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

/*b* a l - *b* a k
*b* a l - b *a* k
*b* a l - b a *k*

b *a* l - *b* a k
b *a* l - b *a* k
b *a* l- b a *k*

b a *l* - *b* a k
b a *l *- b *a* k
b a *l* - b a *k*/