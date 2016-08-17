'use strict';

function Triplet(a, b, c) {
  this.sides = Array.from(arguments);
  return this;
}

Triplet.prototype.sum = function() {
  return _op(this.sides)(add);
};

Triplet.prototype.product = function() {
  return _op(this.sides)(times);
};

Triplet.prototype.isPythagorean = function() {
  return ((sides) =>
    sides[0] + sides[1] === sides[2]
  )(this.sides.map(square));
};

Triplet.where = function(args) {
  const {
    minFactor : MIN,
    maxFactor : MAX,
    sum       : SUM
  } = args;

  let acc = [];

  // triple nested `for` loop!
  // we're going deep
  for(let n = 1; n < 20; n++) {
    for(let m = 2; m < 20; m++) {
      if (m > n) {
        let a = square(m) - square(n);
        let b = 2 * m * n;
        let c = square(m) + square(n);

        // k = 1 is a primative triplet
        // rest are multiples of the primative
        for(let k = 1; k < 20; k++) {

          // insertion conditions
          const ISUNIQUE = acc.every(t => 
            t.sides[0]    !== a * k
            && t.sides[1] !== b * k
            && t.sides[2] !== c * k);
          const INRANGE = a * k > (MIN || 1)
            && b * k  > (MIN || 1)
            && c * k <= MAX;

          if (ISUNIQUE && INRANGE) {
            acc = acc.concat(
              // .apply, in order init Triplet with a sorted array
              // so that we can later sort the accumulated Trips
              Triplet.apply(new Triplet, [a * k, b * k, c * k].sort())
            );
          }
        }
      }
    }
  }

  return acc
    .sort(tripSort) // sort the accumulated trips
    .filter(t => t.sum() === (SUM || t.sum())) // limit to sum
};

module.exports = Triplet;

// helpers
var _op       =  (arr) => (op) => arr.reduce((x, y) => op(x)(y));
var add       =  (x) => (y) => x + y;
var times     =  (x) => (y) => x * y;
var square    =  (x) => x * x;
var tripSort  =  (a, b) => (a.sides[0] < b.sides[0]) ? -1 : 1

// more than you ever wanted to know about triangles:
// http://www.maths.surrey.ac.uk/hosted-sites/R.Knott/Pythag/pythag.html
