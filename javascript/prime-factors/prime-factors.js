var primefactors = {
  for: function(num) {
    // return this._loop(num, 2); // iterative solution
    // return this._recur(num, 2, []); // recursive solution
    return this._tailcall(num, 2); // trampolined tail call optimization
  },

  // method 1: iterative looping
  _loop: function(num, factor) {
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

  // method 2: recursion
  // recusion is cool, expressive, and elegent
  // but big numbers will exceed the stack size and crash
  _recur: function(num, factor, factors) {
    if (num == 1) return factors;
    if (num % factor === 0)
      return this._recur(num/factor, factor, factors.concat(factor));
    return this._recur(num, ++factor, factors);
  },

  // method 3: another recursion, tail call optimized
  // every function returned is bound to its args so it can be called later
  // and the tail call is trampolined
  _tailcall: function(num, factor) {
    function r(n, f, fs) {
      if (n == 1) return fs;
      if (n % f === 0) return r.bind(null, n/f, f, fs.concat(f));
      return r.bind(null, n, ++f, fs);
    }

    return this._tramp(r.bind(null, num, factor, []));
  },

  // trampolines resolve recursive calls in an iterative fashion
  // no more stack overflows
  _tramp: function(fn) {
    while (fn && fn instanceof Function)
      fn = fn.apply(fn.context, fn.args);
    return fn;
  }
}

module.exports = primefactors;
