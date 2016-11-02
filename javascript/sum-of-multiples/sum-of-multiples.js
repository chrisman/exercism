function SumOfMultiples(arr) {

  return {
    data: arr,

    to: function(n) {
      let multiples = [];

      this.data.forEach(d => {
        for (let i = 1; i * d < n; i++) {
          multiples.push(i * d);
        }
      });

      return multiples
        .filter(uniq)
        .reduce(add, 0);
    }
  };
}

module.exports = SumOfMultiples;

const add = (x, y) => x + y;
const uniq = (e, i, a) => a.indexOf(e) === i;
