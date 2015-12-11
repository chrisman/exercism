module.exports = function(){
  return {
    compute: function(a, b){
      if (a.length !== b.length)
        throw "DNA strands must be of equal length."
      return a.split('').reduce(function(acc, curr, idx, arr){
        return (curr === b[idx]) ? acc : ++acc
      }, 0)
    }
  }
}
