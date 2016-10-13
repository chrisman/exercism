function PalindromeProducts(config) {
  this.max  = config.maxFactor;
  this.min  = config.minFactor || 1;
  this.data = {
    // product: [[factor, factor] ... [factor, factor]]
  };
}

PalindromeProducts.prototype._isPalindrome = function(n) {
  // rercusive math is much faster than introducing strings and arrays
  var reverse = (num, acc = 0) => (num > 0) 
    ? reverse(
      num / 10 | 0, // sometimes faster than Math.floor
      acc * 10 + num % 10)
    : acc;  

  return n === reverse(n);
}

PalindromeProducts.prototype._main = function(fn) {
  let keys    = Object.keys(this.data);
  let value   = Math[fn](...keys);
  let factors = this.data[value];

  return {
    "value"   : value,
    "factors" : factors
  }
}

PalindromeProducts.prototype.generate = function() {
  for(let i = this.min; i <= this.max; i++) {
    for(let j = this.min; j <= i; j++) {
      let product = i * j;
      let isPalindrome = this._isPalindrome(product);

      if(isPalindrome) {
        if (!this.data[product])
          this.data[product] = [];

        this.data[product].push([i, j].sort());
      }
    }
  }
}

PalindromeProducts.prototype.smallest = function() {
  return this._main('min');
}

PalindromeProducts.prototype.largest = function() {
  return this._main('max');
}

module.exports = PalindromeProducts;
