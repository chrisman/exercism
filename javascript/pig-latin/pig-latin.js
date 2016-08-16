'use strict'

const VOWEL      = /[aeiou]/;
const MULTIGRAPH = ['thr', 'sch', 'squ', 'ch', 'qu', 'th'];

const pigmap = (str) => 
  // word starts with vowel
  VOWEL.test(str[0])
  ? str + 'ay'
  // word starts with trigraph
  : has(MULTIGRAPH)(str.slice(0, 3))
  ? str.slice(3) + str.slice(0, 3) + 'ay'
  // word starts with digraph
  : has(MULTIGRAPH)(str.slice(0, 2))
  ? str.slice(2) + str.slice(0, 2) + 'ay'
  // word starts with regular consonant
  : str.slice(1) + str[0] + 'ay';

module.exports = {
  translate: function(str) {
    return compose(
      join(' '),
      map(pigmap),
      split(' ')
    )(str);
  }
}

// helpers
var has      =  (arr) => (elem) => arr.indexOf(elem) !== -1;
var split    =  (on) => (str) => str.split(on);
var join     =  (on) => (arr) => arr.join(on);
var map      =  (f) => (a) => a.map(f);
var compose  =  function() {
  var fs = Array.from(arguments);
  return function(init) {
    return fs.reduceRight((val, f) => f(val), init);
  }
}
