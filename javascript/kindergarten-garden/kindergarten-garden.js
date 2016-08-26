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

function Garden(theGarden, theStudents = STUDENTS) {
  this.garden   = theGarden;
  this.students = theStudents;

  this.init();
}

Garden.prototype = {
  constructor: Garden,

  init: function() { 
    this.students
      .sort()
      .map(s => s.toLowerCase())
      .forEach((stdnt, i) => {
        this[stdnt] = this.garden
          .split('\n')                               // split at line break
          .map(s => s.slice(i * 2, i * 2 + 2))       // map to slices
          .map(s => Array.from(s).map(s => DICT[s])) // slice -> [plant, plant]
          .reduce((a, el) => a.concat(el));          // array flattener
      });
  }
}

module.exports = Garden;
