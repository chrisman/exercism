function school() {
  var schoolRoster = {}

  function objBuilder(acc, curr, idx, arr){
    acc[curr] = schoolRoster[curr].sort();
    return acc;
  }

  return {
    roster: function(){
      var sortedGrades = Object.keys(schoolRoster).sort();
      return sortedGrades.reduce(objBuilder, {})
    },
    add: function(s, n){
      if (!(schoolRoster.hasOwnProperty(n)))
        schoolRoster[n] = [s];
      else schoolRoster[n].push(s)
    },
    grade: function(n) {
      if (!(schoolRoster.hasOwnProperty(n)))
        return []
      return schoolRoster[n].sort();
    }
  }
}

module.exports = school
