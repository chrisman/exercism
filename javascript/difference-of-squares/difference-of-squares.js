function Squares(size) {
  this.size = size;
  this.series = Array
    .from({length: this.size})
    .map((_, i) => i + 1);

  this.squareOfSums = square(this.series.reduce(sum));
  this.sumOfSquares = this.series.map(square).reduce(sum);
  this.difference   = Math.abs(this.sumOfSquares - this.squareOfSums);
}

var square = (x) => x * x;
var sum = (x, y) => x + y;

module.exports = Squares;
