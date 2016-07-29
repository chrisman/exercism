// ref: https://taylodl.wordpress.com/2013/06/07/functional-javascript-tail-call-optimization-and-trampolines/
var primefactors = {
  for: function(num) {
    // return this._loop(num);
    return this._recur(num, 2);
  },

  // method 1: iterative looping
  _loop: function(num, factor = 2) {
    var factors = [];

    while (num > 1) {
      while(num % factor === 0) {
        factors.push(factor);
        num /= factor;
      }
      factor++;
    }

    return factors;
  },

  // method 2: recursion!
  _recur: function(num, factor) {

    function r(n, f, fs) {
      if (n == 1)
        return fs;
      if (n % f === 0)
        return r.bind(null, n/f, f, fs.concat(f));
      return r.bind(null, n, ++f, fs);
    }
    return this._tramp(r.bind(null, num, factor, []));
  },

  _tramp: function(fn) {
    while (fn && fn instanceof Function) {
      fn = fn.apply(fn.context, fn.args);
    }
    return fn;
  }
}

module.exports = primefactors;
