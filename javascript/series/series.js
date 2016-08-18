'use strict'

function Series(str) {
  this.string = str;
  this.digits = strToNumArray(this.string);

  return this;
}

Series.prototype.slices = function(n) {
  if (n > this.string.length)
    throw 'Slice size is too big.';

  return compose(
    filter(a => a.length === n),
    reduce
      ((acc, _, i, a) =>
        acc.concat([ slice(i)(i + n)(a) ]))
      ([])
  )(this.digits)
}

module.exports = Series;

// helpers //
var map           = (f) => (a) => a.map(f);
var filter        = (f) => (a) => a.filter(f);
var reduce        = (f) => (init) => (a) => a.reduce(f, init);
var split         = (on) => (str) => str.split(on);
var toNum         = (str) => +str;
var slice         = (start) => (end) => (str) => str.slice(start, end);
var strToNumArray = compose(map(toNum), split(''));

function compose() {
  let fs = Array.from(arguments);
  return function(init) {
    return fs.reduceRight((val, f) => f(val), init);
  }
}
