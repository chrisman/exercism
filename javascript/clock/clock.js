"use strict"

const DAY = 60 * 24;

class Clock {
  constructor(h, m) {
    this.time = (h * 60 + (m || 0)) % (DAY);

    if (this.time < 0) this.time += DAY;

    return this;
  }

  toString() {
    let hh = this._pad(Math.floor(this.time / 60));
    let mm = this._pad(Math.floor(this.time % 60));

    return `${hh}:${mm}`;
  }

  plus(m) {
    return new Clock(0, this.time + m);
  }

  minus(m) {
    return new Clock(0, this.time - m);
  }

  equals(c){
    return this.time === c.time;
  }

  static at(h, m) {
    return new Clock(h, m);
  }

  _pad(s) {
    return (s.toString().length === 1) ? ('0' + s) : s; 
  }
}

module.exports = Clock;
