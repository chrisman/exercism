function Anagram(str){
  this.key = str
  return
}

Anagram.prototype.matches = function(input){
  var key = this.key
  var sortedKey = key.toLowerCase().split('').sort().join('')
  if (!(Array.isArray(input)))
    input = Array.prototype.slice.call(arguments)

  return input.filter(function(e){
    var sortedElement = e.toLowerCase().split('').sort().join('')
    return (e.toLowerCase() !== key.toLowerCase()) && (sortedElement === sortedKey)
  })
}

module.exports = Anagram
