'use strict'

var compose = (...fs) => (init) => 
  fs.reduceRight((val, f) => f(val), init);
var join = (on) => (arr) => arr.join(on);
var split = (on) => (str) => str.split(on);
var map = (f) => (arr) => arr.map(f);
var lower = (str) => str.toLowerCase();
var word = /\w/;
var num = /[0-9]/;
var filter = (f) => (arr) => arr.filter(f);
var atbash = (c) => num.test(c)
  ? c
  : String.fromCharCode(97 + (122 % c.charCodeAt(0)));
var chunk = (size) => (arr) => {
  var result = [];

  for(var i = 0, il = arr.length; i < il; i += size) {
    result.push(arr.slice(i, i + size));
  }

  return result;
}

var rot13 = compose(
  join(' '),
  map(join('')),
  chunk(5),
  map(atbash),
  filter(c => word.test(c)),
  split(''),
  lower
);

module.exports = {
  encode: function(string) {
    return rot13(string);
  }
}
