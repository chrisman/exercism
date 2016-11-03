function Matrix(str) {
  const toRows = s => s
    .split('\n')
    .map(s => s
      .split(' ')
      .map(s => +s));

  const toCols = s => toRows(s)
    .map((x, i, a) => {
      let acc = [];
      a.forEach(r => {
        acc.push(r[i]);
      });
      return acc;
    });

  this.rows    = toRows(str);
  this.columns = toCols(str);

  const isSaddlePoint = n => r => c =>
    n >= r && n <= c;

  const rs = this.rows.length;
  const cs = this.columns.length;

  let saddlepoints = [];

  for(let y = 0; y < rs; y++) {
    for(let x = 0; x < cs; x++) {
      if (isSaddlePoint
        (this.rows[x][y])
        (this.rows[x].reduce(greatest))
        (this.columns[y].reduce(least))
      ) {
        saddlepoints.push([x, y]);
      }
    }
  }

  this.saddlePoints = saddlepoints;
}

module.exports = Matrix;

// HELPER FUNCS //
const greatest = (x, y) => x >= y ? x : y;
const least = (x, y) => x < y ? x : y;
