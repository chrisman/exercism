function sieve(len) {
  this.array = Array.from({length: len})
    .map((_, i) => i + 1) // fill the array
    .filter(x => x > 1);  // start at `2`

  this.primes = [];
  
  while (this.array.length) {
    let h = this.array[0];
    this.primes.push(h);
    this.array = this.array.filter(x => x % h !== 0);
  }
}

module.exports = sieve;
