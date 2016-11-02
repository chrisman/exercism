function SumOfMultiples(a) {

  // call `new` for the user if necessary
  if (not(this instanceof SumOfMultiples))
    return new SumOfMultiples(a);

  this.factors = a;
}

SumOfMultiples.prototype = {
  to: myTo
}

module.exports = SumOfMultiples;

function myTo(limit) {
  let multiples = [];

  this.factors.forEach(f => {
    for (let i = 1; i * f < limit; i++) {
      multiples.push(i * f);
    }
  });

  return multiples
    .filter(uniq)
    .reduce(add, 0);
}

// HELPERS //
const add   =  (x, y) => x + y;
const uniq  =  (e, i, a) => a.indexOf(e) === i;
const not   =  x => !x;

