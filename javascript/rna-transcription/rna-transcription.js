module.exports = function() {
  return {
    toRna: function(s){
      return s.split('').map(function(i){

        return (i === 'C')
          ? 'G' : (i === 'G')
          ? 'C' : (i === 'A')
          ? 'U' : (i === 'T')
          ? 'A' : 'C'

      }).join('')
    },

    toDna: function(s){
      return s.split('').map(function(i){

        return (i === 'C')
          ? 'G' : (i === 'G')
          ? 'C' : (i === 'U')
          ? 'A' : (i === 'A')
          ? 'T' : 'C'

      }).join('')    }
  }
}
