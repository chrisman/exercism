'use strict'

class Crypto {

  constructor(input) {
    this._input = this._sanitize(input);
    this._size  = this._calcSize(this._input);
  }

  normalizePlaintext() { return this._input; }
  size()               { return this._size;  }

  plaintextSegments() {
    return this._chunk(this._size, this._input);
  }

  ciphertext() {
    var chunks = this.plaintextSegments();

    // inner recursive cipher
    function cipher(a, res = '') {
      if (a.length === 0) 
        return res;

      // append the `head` of each word
      a.forEach(word => {
        res += head(word)
      });

      return cipher(
        compose(
          filter(empty), // remove emply lines
          map(tail)      // remove heads
        )(a), 
        res
      );
    }

    return cipher(chunks);
  }

  _sanitize(str) {
    return compose(
      replace(/[^\w]/g)(''), // strip non-word chars
      lower                  // lowercase
    )(str);
  }

  _calcSize(str) {
    return compose(
      Math.ceil,
      Math.sqrt,
      len
    )(str);
  }

  _chunk(size, str) {
    var res = [];

    for(var i = 0, il = str.length; i < il; i += size) {
      res.push(str.slice(i, i + size));
    }

    return res;
  }
}

module.exports = Crypto;

// helpers
var compose = (...fs) => (init) => fs.reduceRight((val, f) => f(val), init);
var len = (str) => str.length;
var lower = (str) => str.toLowerCase();
var filter = (f) => (arr) => arr.filter(f);
var map = (f) => (arr) => arr.map(f);
var tail = (a) => a.slice(1);
var head = (a) => a[0];
var empty = (s) => s !== '';
var replace = (what) => (wit) => (s) => s.replace(what, wit);
