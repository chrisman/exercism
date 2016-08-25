'use strict'

const ERROR = {
  'INPUT'      : 'Invalid input.',
  'SLICE_SIZE' : 'Slice size is too big.'
};

function Series(input) {
  this.value = input;
}

Series.prototype.largestProduct = function(slice) {
  return compose(
    either(id, calculate(slice)), // return `1` or calculate product
    either(_throw, parse(slice)), // either fail/throw or parse input
    validate(slice)               // try to validate user input
  )(this.value);
}

module.exports = Series;

// SERIES HELPERS //

// validate :: (Size) -> (String) -> Either(String, _)
var validate = function(size) {
  return function(series) {
    const BADSERIES = (/[^0-9]/.test(series));
    const BADRANGE  = (size < 0);
    const BIGSLICE  = (size > series.length);

    // Error messages to throw ...
    if (BADSERIES || BADRANGE) 
      return Left.of(ERROR.INPUT);
    if (BIGSLICE) 
      return Left.of(ERROR.SLICE_SIZE);
    
    // ... or the string itself unchanged
    return Right.of(series);
  }
}

// parse :: (Number) -> (String) -> Either(1, Array)
var parse = function(size) {
  return function(str) {

    // `1` is effectively an error message for this condition
    const EMPTYSERIES = (str === '');
    const EMPTYRANGE  = (size === 0);

    return (EMPTYSERIES || EMPTYRANGE)
      ? Left.of(1)
      : Right.of(Array.from(str).map(s => +s));
  }
}

// calculate :: (Number) -> (Array) -> Number
var calculate = function(size) {
  return function(series) {
    let largest = 0, slice, product;

    series.forEach((_, i, arr) => {
      slice = arr.slice(i, i + size);

      if(slice.length === size) {
        product = slice.reduce((x, y) => x * y);
        largest = largest > product ? largest : product;
      }
    });

    return largest;
  }
}

// throw :: (String) -> Nothing
var _throw = (err) => { throw err }; 


// OTHER HELPERS

var compose = function() {
  var fs = Array.from(arguments);
  return function(init) {
    return fs.reduceRight((val, f) => f(val), init);
  }
}

var id = (x) => x;

// LEFT/RIGHT

var Left = function(x) { this.__value = x; };
Left.of = function(x) { return new Left(x); };
Left.prototype.map = function(f) { return this; };

var Right = function(x) { this.__value = x; };
Right.of = function(x) { return new Right(x); };
Right.prototype.map = function(f) { return Right.of(f(this.__value)); }

// EITHER

var either = (f, g) => (e) => {
  switch (e.constructor) {
    case Left:
      return f(e.__value);
    case Right:
      return g(e.__value);
  }
};
