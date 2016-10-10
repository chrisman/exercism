function Matrix(str) {
  this.rows = str.split('\n').map(e => e
    .split(' ')
    .map(i => +i)
  );

  this.columns = this.rows.reduce((p, c, i, a) => {
    let acc = a.map(arr => arr[i]);
    p.push(acc);
    return p;
  }, []);
}

module.exports = Matrix;
