function Matrix(str) {
  const toRows = s => s
    .split('\n')
    .map(s => s
      .split(' ')
      .map(s => +s));

  const toCols = s => toRows(s)
    .map((_, i, a) => {
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

  let saddlepoints = [];

  for(let y = 0; y < this.rows.length; y++) {
    for(let x = 0; x < this.columns.length; x++) {
      saddlepoints = isSaddlePoint
        (this.rows[x][y])
        (Math.max.apply(null, this.rows[x]))
        (Math.min.apply(null, this.columns[y]))
      ? saddlepoints.concat([[x, y]])
      : saddlepoints
    }
  }

  this.saddlePoints = saddlepoints;
}

module.exports = Matrix;
