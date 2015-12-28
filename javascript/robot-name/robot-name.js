function getRandomInt(min, max) {
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
	return getPrefix() + getSuffix();
}


function Robot(){
	this.dictionary = [];
	this.name = getPrefix() + getSuffix();
	
	console.log(this.dictionary.indexOf(this.name));
	while (this.dictionary.indexOf(this.name) !== -1) {
		console.log('dupe entry. ' + this.name + ' has an index of ' + this.dictionary.indexOf(this.name));
		this.name = getPrefix() + getSuffix();
	}
	this.dictionary.push(this.name);
	console.log(this.dictionary);
	return;
}

module.exports = Robot;
