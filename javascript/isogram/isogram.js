'use strict'

const notAllowed = /[ -]/;

var valid = (elem) => !notAllowed.test(elem);
var lowercase = (elem) => elem.toLowerCase();

class Isogram {
  constructor(word) {
    this.word = this._sanitize(word);
    this.set = new Set(this.word);
  }
  
  _sanitize(word) {
    return word
      .split('')
      .map(lowercase)
      .filter(valid)
      .join('');
  }

  isIsogram() {
    return this.word.length === this.set.size;
  }
}

module.exports = Isogram;

