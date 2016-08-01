const dict = {
  '1': 'eggs',
  '2': 'peanuts',
  '4': 'shellfish',
  '8': 'strawberries',
  '16': 'tomatoes',
  '32': 'chocolate',
  '64': 'pollen',
  '128': 'cats'
};

var test = (idx) => (arr) => (coll) => {
  if (arr.length === 0)
    return coll;
  var last = arr[arr.length - 1];
  return test 
    (idx - last) 
    (arr.filter(x => x <= idx - last))
    ([dict[last]].concat(coll));
}

var lesser = (x) => (y) => x < y ? x : y;

class Allergies {
  constructor(score) {
    this.score = this._sanitize(score);
  } 

  _sanitize(num) {
    var max = Object.keys(dict).reduce((x, y) => +x + +y);
    return lesser(num)(max);
  }

  list() {
    return test
      (this.score) 
      (Object.keys(dict).filter(x => x <= this.score)) 
      ([]);
  }

  allergicTo(str) {
    return this.list().indexOf(str) !== -1;
  }
}

module.exports = Allergies;
