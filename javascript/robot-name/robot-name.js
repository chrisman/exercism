function getRandomInt(min, max){
	return Math.floor(Math.random() * (max - min)) + min;
}
function getPrefix(){
	return  String.fromCodePoint(getRandomInt(65, 91)) + String.fromCodePoint(getRandomInt(65, 91));
}
function getSuffix(){
	var collector = '';
	for (var i = 0; i < 3; i++){
		collector += getRandomInt(0, 10);
	}
	return collector;
}
function assembleName(){
	return (getPrefix() + getSuffix());
}

var Robot = function(){
	var dictionary = [];
	var someName = assembleName();
	for (var i = 0; i < dictionary.length; i++) {
		if (someName === dictionary[i]){
			console.log('MATCH'); // never hitting match
			someName = assembleName();
		}
	}
	dictionary.push(someName);
	this.name = someName;
}

module.exports = Robot;
