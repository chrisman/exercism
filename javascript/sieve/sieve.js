function Sieve(len) {
  this.list = Array.from({length: len})
    .map((_, i) => i + 1) // populat list
    .filter(x => x > 1);  // start at `2`

  this.primes = this.sieve(this.list);
}

Sieve.prototype.sieve = function(list, acc = []) {
  if (0 === list.length) 
    return acc;

  acc.push(list[0]);

  return this.sieve(
    list.filter(x => x % list[0] !== 0), 
    acc
  );
}

module.exports = Sieve;
