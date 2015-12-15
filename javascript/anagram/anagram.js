function Anagram(str){
  this.key = str
  return
}

Anagram.prototype.matches = function(arr){
  var key = this.key
  var sortedKey = key.toLowerCase().split('').sort().join('')

  arr = (typeof arr === 'string') ? Array.prototype.slice.call(arguments) : arr

  return arr.filter(function(e){
    var sortedElement = e.toLowerCase().split('').sort().join('')
    return (e.toLowerCase() !== key.toLowerCase()) && (sortedElement === sortedKey)
  })
}

module.exports = Anagram
