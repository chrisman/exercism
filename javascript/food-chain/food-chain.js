function foodchain(){
  return
}

var animalsAndRemarks = [
  {
    "animal": `fly`,
    "remark": `I don't know why she swallowed the fly. Perhaps she'll die.`
  },
  {
    "animal": `spider`,
    "remark": `It wriggled and jiggled and tickled inside her.`
  }
]

function addBridge(n, m){
  return `She swallowed the ${n["animal"]} to catch the ${m["animal"]}.\n`
}

function getFirstLine(o){
  return `I know an old lady who swallowed a ${o["animal"]}.\n${o["remark"]}\n`
}
function wrapItUp(o){
  return o["remark"]+'\n'
}

foodchain.prototype.verse = function(num) {
  num = num - 1
  var notFirst = (num > 0) ? true : false
  var song = getFirstLine(animalsAndRemarks[num])
  while (num > 0) {
    song += addBridge(animalsAndRemarks[num], animalsAndRemarks[num - 1])
    num--
  }
  if (notFirst)
    song += wrapItUp(animalsAndRemarks[num])
  return song
}

module.exports = foodchain
