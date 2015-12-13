function Pangram(s) {
  this.sentence = s;
  this.alphabet = 'abcdefghijklmnopqrstuvwxyz'
  return;
}

Pangram.prototype.isPangram = function(){
  var sentence = this.sentence.toLowerCase()
  return this.alphabet.split('').every(function(i){
    return sentence.includes(i)
  });
}

module.exports = Pangram;
