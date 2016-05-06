"use strict"

var Clock = function(h, m){
  this.hour = h;
  this.minute = m || 0;
}
Clock.prototype.toString = function(){
  return `${pad(this.hour)}:${pad(this.minute)}`;
}
Clock.prototype.plus = function(m) {
  this.minute += m;
  this.hour += Math.floor(this.minute / 60);

  this.hour %= 24;
  this.minute %= 60;
  return this;
}
Clock.prototype.minus = function(m) {
  this.plus(m * -1);
  if (this.minute < 0) this.minute += 60;
  if (this.hour < 0) this.hour += 24;
  return this;
}
Clock.prototype.equals = function(c){
  return this.toString() === c.toString();
}

var pad = (s) => {
  s += '';
  return (s.length == 1) ? ('0' + s) : s;
};
var at = (h, m) => new Clock(h, m);

module.exports = {
  at: at
};
