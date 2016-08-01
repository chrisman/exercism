'use strict'

var Left = function(x) {
  this.__value = x;
};

Left.of = function(x) {
  return new Left(x);
} 

Left.prototype.map = function(f) {
  return this; // do not map
}

var Right = function(x) {
  this.__value = x;
};

Right.of = function(x) {
  return new Right(x);
} 

Right.prototype.map = function(f) {
  return new Right.of(f(this.__value));
}

var map = (f) => (x) => x.map(f);

var id = (x) => x;

var compose = (...fs) => (init) =>
  fs.reduceRight((val, f) => f(val), init);

// factor :: num => num => boolean
var factor = (factor) => (num) => num % factor === 0;

var either = (f, g) => (e) => {
  switch (e.constructor) {
    case Left:
      return f(e.__value);
    case Right:
      return g(e.__value);
  }
}

var string = (num) => num.toString();

var log = (msg) => (x) => {
  console.log(msg, x);
  return x;
}

// getFactors :: number => either(number, string)
var getFactors = (num) => {
  var res
  = (factor(3)(num) ? 'Pling' : '')
  + (factor(5)(num) ? 'Plang' : '')
  + (factor(7)(num) ? 'Plong' : '')
  ;

  // no factors is treated as an error
  return (res.length === 0)
    ? Left.of(num)
    : Right.of(res);
};

class Raindrops {
  convert(num) {
    return compose(
      either(string, id), getFactors
    )(num);
  }
}

module.exports = Raindrops;
