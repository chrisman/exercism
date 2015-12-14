function PhoneNumber(str) {
  this.userinput = str
  return
}

function returnNumbersOnly(i) {
  return i.match(/[0-9]/)
}

function validWithElevenDigits(s) {
  return (s[0] === '1') ? s.slice(1) : invalidNumber()
}

function invalidNumber(){
  return '0000000000'
}

PhoneNumber.prototype.number = function() {
  var n = this.userinput
  n = n.split('').filter(returnNumbersOnly).join('')

  n = (n.length === 11)
    ? validWithElevenDigits(n)
    : (n.length === 9)
    ? invalidNumber()
    : n

  return n
}

PhoneNumber.prototype.areaCode = function(){
  return this.userinput.slice(0,3)
}

PhoneNumber.prototype.toString = function(){
  var s = this.userinput
  return '('+ this.areaCode() +') '+ s.slice(3,6) +'-'+ s.slice(6)
}

module.exports = PhoneNumber
