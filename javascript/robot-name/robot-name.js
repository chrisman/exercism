"use strict";

var compose = (f, g) => x => f(g(x));
var numToChar = n => String.fromCharCode(n);
var randomInRange = (min, max) => 
  () => Math.floor(Math.random() * (max - min) + min);
var randCharNum = randomInRange(65, 90);
var randChar = compose(numToChar, randCharNum)
var randNumNum = randomInRange(0, 9);
var robotName = () => 
  randChar() + randChar() + randNumNum() + randNumNum() + randNumNum();
var has = (arr) => (elem) => arr.indexOf(elem) !== -1;
var arrayAdd = (arr) => (elem) => arr.push(elem);
var arrayRemove = (arr) => (elem) => 
  arr.slice(0, arr.indexOf(elem))
    .push(arr.slice(arr.indexOf(elem) + 1));

var robotParty = [];
var partyHas = has(robotParty);
var partyAdd = arrayAdd(robotParty);
var uniqRobotName = () => {
  var name;
  do name = robotName();
  while (partyHas(name));
  partyAdd(name);
  return name;
};
var partyRemove = arrayRemove(robotParty);

class Robot{
  constructor(){
    this.name = uniqRobotName();
  }

  reset(){
    var temp = this.name;
    this.name = uniqRobotName();
    partyRemove(temp);
  }
}

module.exports = Robot;
