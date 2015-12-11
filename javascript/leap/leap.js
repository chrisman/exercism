module.exports = function (y) {

  return {
    year: y,

    isLeap: function() {
      return (this.year % 400 === 0 || this.year % 100 !== 0) && (this.year % 4 === 0)
    }
  }

}
