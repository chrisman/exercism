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

function addBridge(n){
  return `She swallowed the ${animalsAndRemarks[n]["animal"]} to catch the ${animalsAndRemarks[n - 1]["animal"]}.\n`
}

function getFirstLine(o){
  return `I know an old lady who swallowed a ${o["animal"]}.\n${o["remark"]}\n`
}

foodchain.prototype.verse = function(num) {
  num = num - 1
  console.log(num);
  var song = getFirstLine(animalsAndRemarks[num])
  if (num > 0) {
    song += addBridge(num)
    song += animalsAndRemarks[num - 1]["remark"]+'\n'
  }
  return song
}

module.exports = foodchain
