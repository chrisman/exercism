function Wordy (q) {
  this.answer = q.split(' ').filter(w => (w !== 'What' || w !== 'is' || w !== 'by'));
  return this;
}

Wordy.prototype.answer = function() {
  return this.answer;
}

Wordy.WordProblem = function(question) {
  return new Wordy(question);
}

Wordy.ArgumentError = function() {
  return 'Error';
}

module.exports = Wordy;
