function accumulate(arr, cb) {
  function _accumulate(a, cb, result) {
    if (a.length === 0) return result;
    result.push(cb(a[0]));
    return _accumulate(a.slice(1), cb, result);
  }

  return _accumulate(arr, cb, []);
}

module.exports = function(arr, cb) {
  return accumulate(arr, cb);
}
