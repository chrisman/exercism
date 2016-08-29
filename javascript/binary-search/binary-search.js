'use strict'

var BinarySearch = function(arr) {
  this.array = this._validate(arr) || undefined;
}

BinarySearch.prototype = {
  constructor : BinarySearch,
  indexOf     : myIndexof,
  _validate   : myValidate
};

module.exports = BinarySearch;

function myIndexof(value) {

  // (array to search, value to search for, lower bound, upper bound)
  function inner(a, v, lower, upper) { 
    if (lower > upper) return -1; // not found

    // `| 0` is sometimes faster than Math.floor
    let index = upper - lower / 2 | 0;
    let value = a[index];

    lower = (value < v) ? index + 1 : lower;
    upper = (value > v) ? index - 1 : upper;

    return (value === v) 
      ? index
      : inner(a, v, lower, upper);
  }

  return inner(this.array, value, 0, this.array.length - 1);
}

function myValidate(a) {
  var valid = true;

  a.forEach((c, i, a) => {
    valid = (c > a[i + 1]) ? false : valid;
  });

  return (valid) ? a : false;
}

