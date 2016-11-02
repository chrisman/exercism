const DEFAULT = {
  white: [0, 3],
  black: [7, 3]
};

const ERRORS = {
  collision: 'Queens cannot share the same space'
}

const collision = o =>
  o.white[0] === o.black[0]
  && o.white[1] === o.black[1];

function QueenAttack(config = DEFAULT) {
  if (collision(config))
    throw ERRORS.collision;

  Object.assign(this, config);
}

QueenAttack.prototype.toString = function() {
  const len = 8;

  let board = Array.from({length: len})
    .map(x => Array.from({length: len})
      .map(x => '_'));

  board[this.white[0]][this.white[1]] = 'W';
  board[this.black[0]][this.black[1]] = 'B';

  return board
    .map(a => a.join(' '))
    .map(s => s + '\n')
    .join('');
}

QueenAttack.prototype.canAttack = function() {
  const sameRow = a => b => a[0] === b[0];

  const samecol = a => b => a[1] === b[1];

  const diag = a => b =>
    Math.abs((a[0] - b[0]) / (a[1] - b[1])) === 1;

  return sameRow(this.white)(this.black)
    || samecol(this.white)(this.black)
    || diag(this.white)(this.black)
}

module.exports = QueenAttack;
