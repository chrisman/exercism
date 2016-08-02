module.exports = {
  keep: function(arr, cb) {
    return this._test(arr, cb, true);
  },

  discard: function(arr, cb) {
    return this._test(arr, cb, false);
  },

  _test: function(a, f, bool) {
    var result = [];

    for(var i = 0, il = a.length; i < il; i++) {
      if (f(a[i]) === bool) 
        result.push(a[i]);
    }

    return result;
  }
};
