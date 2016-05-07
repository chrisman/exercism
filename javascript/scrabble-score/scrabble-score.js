"use strict"

const dict = {
  1: ['A', 'E', 'I', 'O', 'U', 'L', 'N', 'R', 'S', 'T'],
  2: ['D', 'G'],
  3: ['B', 'C', 'M', 'P'],
  4: ['F', 'H', 'V', 'W', 'Y'],
  5: ['K'],
  8: ['J', 'X'],
  10: ['Q', 'Z']
};
const ADD = (x, y) => x + y;
const LOOKUP = e => {
  let __score;
  Object.keys(dict).forEach( k => {
    if (-1 !== dict[k].indexOf(e)) __score = k;
  });
  return __score;
};

var score = s => (!s) ? 0 : s
  .toUpperCase()
  .split('')
  .map(LOOKUP)
  .map(Number)
  .reduce(ADD);

module.exports = score;
