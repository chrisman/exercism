// `node --harmony /usr/bin/jasmine-node .`
"use strict"

var uniq = (e, i, a) => a.indexOf(e) === i;
var add = (x, y) => x + y;
var neg = e => e < 0;
var noSize = a => a.reduce(add) === 0;
var hasNeg = a => a.filter(neg).length !== 0;
var violatesInequality = a => 
  add(a[0], a[1]) <= a[2] ||
  add(a[0], a[2]) <= a[1] ||
  add(a[1], a[2]) <= a[0];

var isTriangle = a => 
  !noSize(a) && !hasNeg(a) && !violatesInequality(a);

class Triangle {
  constructor(...sides){
    this.sides = sides;
  }

  kind(){
    if (isTriangle(this.sides)){
      let sides = this.sides.filter(uniq).length;
      return (sides === 1) ? 'equilateral' :
        (sides === 2) ? 'isosceles' : 'scalene';
    } else throw "not a triangle";
  }
}

module.exports = Triangle;
