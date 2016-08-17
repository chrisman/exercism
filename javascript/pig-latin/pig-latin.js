'use strict'

const VOWEL      = /[aeiou]/;
const MULTIGRAPH = ['thr', 'sch', 'squ', 'ch', 'qu', 'th'];

// this is closer to how I would explain the rules in natural language. split
// the word into `left` and `right` parts. swap left and right, append the
// suffix
//
// pigmap :: (String) => String Array
const pigmap = (str) => {
  let left, right, suffix = 'ay';

  // the word starts with a vowel
  if (VOWEL.test(head(str))) {
    left  = '';
    right = str;

  // the word starts with a trigraph
  } else if (has(MULTIGRAPH)(str.slice(0, 3))) {
    left  = str.slice(0, 3);
    right = str.slice(3);

  // the word starts with a digraph
  } else if (has(MULTIGRAPH)(str.slice(0, 2))) {
    left  = str.slice(0, 2);
    right = str.slice(2);

  // word starts with regular ole consonant
  } else {
    left  = head(str);
    right = str.slice(1);
  }

  // swap left and right, append suffix
  return [right, left, suffix]
}

module.exports = {
  translate: function(str) {
    return compose(
      join(' '),     // join words
      map(join('')), // join word parts
      map(pigmap),   // get word parts
      split(' ')     // split words
    )(str);
  }
}

// helpers
var head    = (str) => str[0];
var has     = (arr) => (elem) => arr.indexOf(elem) !== -1;
var split   = (on) => (str) => str.split(on);
var join    = (on) => (arr) => arr.join(on);
var map     = (f) => (a) => a.map(f);
var compose = function() {
  var fs = Array.from(arguments);
  return function(init) {
    return fs.reduceRight((val, f) => f(val), init);
  }
}
