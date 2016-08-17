function Cipher(key = randomKey) {
  this.key = this._validate(key);
}

Cipher.prototype.encode = function(str) {
  return this._op(add, wrapHigh)(str);
}

Cipher.prototype.decode = function(str) {
  return this._op(minus, wrapLow)(str);
}

module.exports = Cipher;

// private methods

Cipher.prototype._validate = function(key) {
  if (0 === key.length || /[^a-z]/.test(key))
    throw "Bad key";
  return key;
}

Cipher.prototype._op = function(operation, wrap) {
  var that = this;

  return function(str) {
    return Array.from(str)
      .map((curr, i) => 
        stringFromCode(
          wrap(
            operation
              (charCode(curr))
              (charCode(that.key[i]) - 97)
          )
        )
      )
      .join('');
  }
}

// helpers

const KEYLEN        =  100;
const MIN           =  97;
const MAX           =  122;
var minus           =  (x) => (y) => x - y;
var add             =  (x) => (y) => x + y;
var wrapLow         =  (n) => MAX - ((MAX - n) % 26);
var wrapHigh        =  (n) => ((n - MIN) % 26) + MIN;
var stringFromCode  =  (n) => String.fromCharCode(n);
var charCode        =  (s) => s.charCodeAt(0);
var randCharCode    =  () => rand(MIN)(MAX);
var rand            =  (min) => (max) =>
  Math.floor(Math.random() * (max - min + 1)) + min;
var randomKey       =  Array.from({length: KEYLEN})
  .map(i => randCharCode())
  .map(c => stringFromCode(c))
  .join('');

