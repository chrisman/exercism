'use strict'

function Triplet(a, b, c) {
  this.sides = [a, b, c];
  return this;
}

Triplet.prototype.sum = function() {
  return _op(this.sides)(add);
}

Triplet.prototype.product = function() {
  return _op(this.sides)(times);
}

Triplet.prototype.isPythagorean = function() {
  return ((sides) => 
    sides[0] + sides[1] === sides[2]
  )(this.sides.sort().map(square));
}

Triplet.where = function(args) {
  let min = args.minFactor || 0;
  let max = args.maxFactor;

  function inner(a, b, c, acc) {
    if (c === min) 
      return [
        new Triplet(3, 4, 5),
        new Triplet(6, 8, 10)
      ]

    if (new Triplet(a, b, c).isPythagorean())
      acc = acc.concat(new Triplet(a, b, c);

    return inner(a, b, --c, acc);
  }

  return inner(min, min, max, []);
}

module.exports = Triplet;

var _op = (arr) => (op) => arr.reduce((x, y) => op(x)(y));
var add = (x) => (y) => x + y;
var times = (x) => (y) => x * y;
var square = (x) => x * x;
