// english to math map
const OPERATORS = {
  'plus': function(x, y) {
    return x + y;
  },
  'minus': function(x, y) {
    return x - y;
  },
  'multiplied': function(x, y) {
    return x * y;
  },
  'divided': function(x, y) {
    return x / y;
  }
};

// nonsense words to filter out
const CRUFT = [
  'What', 'is', 'by'
];

function WordProblem(question) {
  this.input = this._parse(question);

  // every even number should be an operator
  this.operators = this.input
    .filter((_, i) => i % 2 !== 0);

  // every odd number should be an number
  this.operands = this.input
    .filter((_, i) => i % 2 === 0)
    .map(x => +x);

  return this;
}

WordProblem.prototype.answer = function() {
  const BAD_OPERAND = this.operands
    .some(o => typeof o !== 'number');
 
  const BAD_OPERATOR = this.operators
    .some(o => OPERATORS[o] === undefined);

  if (BAD_OPERAND || BAD_OPERATOR)
    throw new ArgumentError;

  return this.operands
    .reduce((x, y) => {
      let fn = this.operators.shift();
      return OPERATORS[fn](x, y);
    }
  );
}

WordProblem.prototype._parse = function(str) {
  return Array.from(str)
    .filter(c => c !== '?')
    .join('')
    .split(' ')
    .filter(i => CRUFT.indexOf(i) === -1);
}

function ArgumentError() {
  return 'Error';
}

module.exports = {
  WordProblem: WordProblem,
  ArgumentError: ArgumentError
};
