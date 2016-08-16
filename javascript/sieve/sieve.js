function Sieve(len) {
  this.list = Array.from({length: len})
    .map((_, i) => i + 1) // populat list
    .filter(x => x > 1);  // start at `2`

  this.primes = _sieve(this.list);
}

var _sieve = (list, acc = []) =>
  (0 === list.length) 
    ? acc     // return accumulated primes
    : _sieve( // recur
        // filter out list head and multiples
        list.filter(x => x % list[0] !== 0), 
        // add list head to accumulator
        acc.concat(list[0])
      );

module.exports = Sieve;
