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
  },
  {
    "animal": `bird`,
    "remark": `How absurd to swallow a bird!`
  },
  {
    "animal": `cat`,
    "remark": `Imagine that, to swallow a cat!`
  },
  {
    "animal": `dog`,
    "remark": `What a hog, to swallow a dog!`
  },
  {
    "animal": `goat`,
    "remark": `Just opened her throat and swallowed a goat!`
  },
  {
    "animal": `cow`,
    "remark": `I don't know how she swallowed a cow!`
  },
  {
    "animal": `horse`,
    "remark": `She's dead, of course!`
  }
]

function addBridge(n, m){
  return (m["animal"] == "spider") // special spider edge case
    ? `She swallowed the ${n["animal"]} to catch the ${m["animal"]} ${m["remark"].replace(/It/,'that')}\n`
    : `She swallowed the ${n["animal"]} to catch the ${m["animal"]}.\n`
}

function getFirstLine(o){
  return `I know an old lady who swallowed a ${o["animal"]}.\n${o["remark"]}\n`
}
function wrapItUp(o){
  return o["remark"]+'\n'
}

foodchain.prototype.verses = function(start, finish) {
  var song = ''
  while (start <= finish) {
    song = song + this.verse(start++) + '\n'
  }
  return song
}

foodchain.prototype.verse = function(num) {
  var v, num = num - 1
  if (num === 7) {
    return getFirstLine(animalsAndRemarks[num])
  }
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
