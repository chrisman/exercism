function Year(y) {
  this.year = y;
  return this;
}

Year.prototype.isLeap = function() {

  // leap year rules
  const HUNDRED_YEAR_RULE = 
    divisibleByFourHundred(this.year) 
    || !divisibleByOneHundred(this.year);

  const FOUR_YEAR_RULE = divisibleByFour(this.year);
  
  return HUNDRED_YEAR_RULE && FOUR_YEAR_RULE;
}

module.exports = Year;

// helpers
var divisibleBy             =  (x) => (y) => y % x === 0;
var divisibleByFour         =  divisibleBy(4);
var divisibleByOneHundred   =  divisibleBy(100);
var divisibleByFourHundred  =  divisibleBy(400);

