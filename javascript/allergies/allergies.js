const DICT = {
  '1': 'eggs',
  '2': 'peanuts',
  '4': 'shellfish',
  '8': 'strawberries',
  '16': 'tomatoes',
  '32': 'chocolate',
  '64': 'pollen',
  '128': 'cats'
};

// helpers
var uniq = (elem, idx, arr) => arr.indexOf(elem) === idx;
var last = (arr) => arr[arr.length - 1];
var has = (arr) => (x) => arr.indexOf(x) !== -1;

// main function
var allergies = (score) => (arr) => {

  var recur = (i) => (a) => (res) => 
    (a.length === 0)
      ? res
      : recur 
        (i - last(a)) 
        (a.filter(x => x <= i - last(a)))
        ([DICT[last(a)]].concat(res));

  return recur(score)(arr)([]);
}

class Allergies {
  constructor(score) {
    this.score = score;
  } 

  list() {
    return allergies
      (this.score) 
      (Object.keys(DICT).filter(x => x <= this.score))
    .filter(uniq);
  }

  allergicTo(str) {
    return has
      (this.list())
      (str);
  }
}

module.exports = Allergies;
