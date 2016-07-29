// parseInt is cheating but this is short
module.exports = function(num) {
  this.toDecimal = () => 
    /[^01]/.test(num) ? 0 : parseInt(num, 2) 
}
