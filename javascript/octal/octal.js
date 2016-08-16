'use strict'

const BASE = 8;

// main function
module.exports = function(str) {
  this.toDecimal = () => compose(
    maybe(0, todecimal),
    valid
  )(str);
}

// HELPERS //

// valid :: (str) => maybe string
var valid = (str) => Maybe.of(/[^0-7]/.test(str) ? null : str);

// todecimal :: (string) => number 
var todecimal = (str) => Array.from(str)
  .reduce((acc, curr, idx, arr) => 
      acc + Math.pow(BASE, arr.length - 1 - idx) * curr
  , 0);

var compose = function() {
  var fs = Array.from(arguments);
  return function(init) {
    return fs.reduceRight((val, f) => f(val), init);
  }
}

// maybe! 
var Maybe = function(x) { this.__value = x; };

Maybe.of = function(x)  { return new Maybe(x); };

Maybe.prototype.isNothing = function() {
  return (this.__value === null || this.__value === undefined);
};

Maybe.prototype.map = function(f) {
  return this.isNothing() ? Maybe.of(null) : Maybe.of(f(this.__value));
}

var maybe = (x, f) => (m) => m.isNothing() ? x : f(m.__value);
