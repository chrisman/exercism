var Robot = function(){
	var that = this;

	return function(){
		var someName = that._assembleName();
		for (var i = 0; i < that._dictionary.length + 1; i++) {
			if (someName === that._dictionary[i]){
				someName = that._assembleName();
			}
		}
		that._dictionary.push(someName);
		that.name = someName;
	}();
}

Robot.prototype._dictionary = [];
Robot.prototype._getRandomInt = function(min, max){
	return Math.floor(Math.random() * (max - min)) + min;
}
Robot.prototype._getPrefix = function(){
	return  String.fromCodePoint(this._getRandomInt(65, 91)) + String.fromCodePoint(this._getRandomInt(65, 91));
}
Robot.prototype._getSuffix = function(){
	var collector = '';
	for(var i = 0; i < 3; i++){
		collector += this._getRandomInt(0, 10);
	}
	return collector;
}
Robot.prototype._assembleName = function(){
	return (this._getPrefix() + this._getSuffix());
}


module.exports = Robot;
