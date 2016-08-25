const DICT = {
  'R' : 'radishes',
  'C' : 'clover',
  'G' : 'grass',
  'V' : 'violets'
}

const STUDENTS = [
  'alice'  , 'bob'    , 'charlie' , 'david'   ,
  'eve'    , 'fred'   , 'ginny'   , 'harriet' ,
  'ileana' , 'joseph' , 'kincaid' , 'larry'
];

function Garden(garden, students = STUDENTS) {
  return students
    .sort()
    .map(s => s.toLowerCase())
    .reduce((o, c, i) => {
      o[c] = parse(garden)(i);
      return o;
    }
    , {});
}

var parse = (str) => (i) => str
  .split('\n')
  .map(s => s.slice(i * 2, i *2 + 2))
  .map(s => Array.from(s).map(s => DICT[s]))
  .reduce((acc, curr) => acc.concat(curr), [])

module.exports = Garden;
