function objBuilder(acc, curr, idx, arr){
  acc[curr] = (acc.hasOwnProperty(curr)) ? acc[curr] + 1 : 1
  return acc
}

module.exports = function(){
  return {
    count: function(s){
      return s.trim().split(/\s+/).reduce(objBuilder,{})
    }
  }
}
