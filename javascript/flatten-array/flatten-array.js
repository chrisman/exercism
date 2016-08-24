'use strict'

function Flat() { }

Flat.prototype.flatten = function(arr) {
  var result = [];

  arr.forEach(a => {
    result = (Array.isArray(a))
      ? result.concat(this.flatten(a))
      : result.concat(a)
  });

  return result
    .filter(n => n !== null);
}

module.exports = Flat;
