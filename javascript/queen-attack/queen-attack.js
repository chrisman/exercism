const DEFAULT = {
  white: [0, 3],
  black: [7, 3]
};

const errors = {
  collision: 'Queens cannot share the same space'
}

function QueenAttack(config = DEFAULT) {
  this.w = new Point();
  this.b = new Point();
  Point.apply(this.w, config.white);
  Point.apply(this.b, config.black);

  if (this.w.eql(this.b))
    throw errors.collision;

  this.white = this.w.print();
  this.black = this.b.print();
}

QueenAttack.prototype.toString = function() {
  const len = 8;

  let board = Array.from({length: len})
    .map(y => Array.from({length: len})
      .map(x => '_'));

  board[this.w.x][this.w.y] = 'W';
  board[this.b.x][this.b.y] = 'B';

  return board
    .map(a => a.join(' '))
    .map(s => s + '\n')
    .join('');
}

QueenAttack.prototype.canAttack = function() {
  const sameRow = a => b => a.x === b.x;

  const sameCol = a => b => a.y === b.y;

  const diag = a => b =>
    Math.abs((a.x - b.x) / (a.y - b.y)) === 1;

  return sameRow(this.w)(this.b)
    || sameCol(this.w)(this.b)
    || diag(this.w)(this.b)
}

module.exports = QueenAttack;


// Helper Class //
function Point(x, y) {
  this.x = x;
  this.y = y;
}

Point.prototype.print = function() {
  return [this.x, this.y];
}

Point.prototype.eql = function(p) {
  return this.x === p.x && this.y === p.y;
}
