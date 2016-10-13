function PalindromeProducts(config) {
  this.max  = config.maxFactor;
  this.min  = config.minFactor || 1;
  this.data = {
    // product: [[factor, factor], ... ,[factor, factor]]
  };
}

// isPalindrome :: number -> boolean
PalindromeProducts.prototype._isPalindrome = function(n) {
  var reverse = (num, acc = 0) => (num > 0) 
    ? reverse(
      num / 10 | 0,
      (acc * 10) + (num % 10))
    : acc;  

  return n === reverse(n);
}

PalindromeProducts.prototype._reduce = function(fn) {
  let value = Object.keys(this.data).reduce(fn);
  let factors = this.data[value];

  return {
    "value": value,
    "factors": factors
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
  return this._reduce((p, c) => +c < +p ? +c : +p);
}

PalindromeProducts.prototype.largest = function() {
  return this._reduce((p, c) => +c > +p ? +c : +p);
}

module.exports = PalindromeProducts;
