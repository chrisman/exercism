module.exports = function(){
  return {
    verse: function(n, m){
      var arr = []
      if (n === 0) {
        arr = [
          'No more bottles of beer on the wall, no more bottles of beer.\nGo to the store and buy some more, 99 bottles of beer on the wall.\n'
        ]
      }
      else if (n === 1) {
        arr = [
          n,
          ' bottle of beer on the wall, ',
          n,
          ' bottle of beer.\nTake it down and pass it around, no more bottles of beer on the wall.\n']
      } else {
        arr = [
          n,
          ' bottles of beer on the wall, ',
          n,
          ' bottles of beer.\nTake one down and pass it around, ',
          n - 1,
          ' bottles of beer on the wall.\n'
        ]
      }
      return arr.join('')
    },
    sing: function(n, m, arr) {
      arr = arr || []
      m = m || 0

      if (n < m)
        return arr.join('\n')

      arr.push(this.verse(n))
      return this.sing(n - 1, m, arr)
    }
  }
}
