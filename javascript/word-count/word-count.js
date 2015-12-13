module.exports = function(){
  return {
    count: function(s){
      return s.split(' ').reduce(function(acc, curr, idx, arr){
        acc[curr] = 1
        return acc
      },{})
    }
  }
}
