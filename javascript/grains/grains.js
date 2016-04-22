"use strict";

var BigInt = require('./big-integer');
var range = (start, end) => {
  let array = [];
  for(let i = start; i <= end; i++) {
    array.push(i);
  }
  return array;
}

module.exports = function(){
  const BASE = BigInt(2);
  let _addBigInts = (acc, curr) => acc.add(square(curr));

  let square = n => BASE.pow(n - 1).toString();
  let total = () => range(1, 64)
    .reduce(_addBigInts, BigInt(0))
    .toString();

  return {
    square: square,
    total: total
  }
}
