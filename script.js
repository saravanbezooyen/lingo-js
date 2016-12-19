function Game(naam) {
	this.naam = naam; 
	this.getNaam = function() {
		return this.naam;
	}
	this.getRandomWoord = function() {
		return words[Math.floor((Math.random() * 479) + 1)];
	}
}

var game = new Game('naam');
console.log(game.getRandomWoord());

//Als eerste check je of de gebruiker het woord geraden heeft. 
//Zo niet dan kijk je of de letter er in voorkomt en mocht dat het geval zijn dan pas, of het woord ook op de juiste plek staat.

function wordChecker(word) {
	if (word == randomWord) {
        console.log("win");
	} else {
		for (
			var i = 0; 
			i < randomWord.length; 
			i++)
			var res = str.charAt(i);{
			for (
				var x = 0; 
				x < randomWord.length; 
				x++){
					if (true) {

					} else {

					}
		}	
	}
}
}

/*b* a l - *b* a k
*b* a l - b *a* k
*b* a l - b a *k*

b *a* l - *b* a k
b *a* l - b *a* k
b *a* l- b a *k*

b a *l* - *b* a k
b a *l *- b *a* k
b a *l* - b a *k*/