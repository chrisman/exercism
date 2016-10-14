const range = n => Array.from({length: n}).map((_, i) => i);
const last = a => a[a.length - 1];

class Triangle {
  constructor(n) {
    this.triangle = range(n).map(m => {
      let row = [1];

      range(m).forEach(k => {
        row.push(row[k] * (m - k) / (k + 1));
      });
      
      return row;
    });
  }

  get rows() {
    return this.triangle;
  }

  get lastRow() {
    return last(this.triangle);
  }
}

module.exports = Triangle;
