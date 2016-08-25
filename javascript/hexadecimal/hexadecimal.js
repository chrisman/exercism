'use strict'

const BASE = 16;

const DICT = {
  '0': 0  , '1': 1  , '2': 2  , '3': 3  ,
  '4': 4  , '5': 5  , '6': 6  , '7': 7  ,
  '8': 8  , '9': 9  , 'a': 10 , 'b': 11 ,
  'c': 12 , 'd': 13 , 'e': 14 , 'f': 15
};

function Hexadecimal(input) {
  this._value = input;
}

Hexadecimal.prototype.toDecimal = function() {
  return maybe(0, id) (
    Maybe.of(
      compose(
        reduce(toDecimal(BASE)),
        map(s => DICT[s]),
        reverse,
        array
      )(this._value)
    )
  );
}

module.exports = Hexadecimal;

// FUNCTIONAL STUFF //
//
var toDecimal  =  (B) => (p, c, i) => p + Math.pow(B, i) * c;
var id         =  (x) => x;
var reduce     =  (f) => (a) => a.reduce(f);
var map        =  (f) => (a) => a.map(f);
var reverse    =  (a) => a.reverse();
var array      =  (s) => Array.from(s);
var compose = function(){
  var fns = Array.from(arguments);
  return function(init) {
    return fns.reduceRight((val, f) => f(val), init);
  }
}

// MAYBE STUFF //
//
function Maybe(x) { this.__value = x; }
Maybe.of = (x) => new Maybe(x); 
Maybe.prototype.isNothing = function() {
  // franken-nothing: checks for NaN instead of nothingness
  return isNaN(this.__value);
}
var maybe = (x, fn) => (m) => m.isNothing() ? x : fn(m.__value); 
