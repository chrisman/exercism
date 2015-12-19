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

function getFirstLine(o){
  return `I know an old lady who swallowed a ${o["animal"]}.\n${o["remark"]}\n`
}

foodchain.prototype.verse = function(n){
  return getFirstLine(animalsAndRemarks[n - 1])
}

module.exports = foodchain
