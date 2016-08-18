'use strict'

function Series(str) {
  this.string = str;
  this.digits = this.string.split('').map(s => +s);;

  return this;
}

Series.prototype.slices = function(n) {
  return this.digits.reduce((acc, curr, idx, arr) => {
    let slice = this.string
      .slice(idx, idx + n)
      .split('')
      .map(s => +s);

    return acc.concat([slice]);
  }
  , []) 
} 

module.exports = Series;
