var compose = (f, g) => x => f(g(x));
var numToChar = n => String.fromCharCode(n);
var randomInRange = (min, max) => 
  () => Math.floor(Math.random() * (max - min) + min);
var randCharNum = randomInRange(65, 90);
var randChar = compose(numToChar, randCharNum)
var randNumNum = randomInRange(0, 9);
var add = (x, y) => x + y;
var robotName = () => add(
  randChar(), add(
    randChar(), 
    add(
      randNumNum(),
      add(
        randNumNum(),
        randNumNum()
      )
    )
  )
);


module.exports = Robot;
