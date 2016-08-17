'use strict'

class Luhn {
  constructor(num) {
    this.num = num;
    return this;
  }

  get checkDigit() {
    return this.num % 10;
  }

  get addends() {
    return Array.from(this.num + '')
      .reverse()
      .map((e, i) => !(i % 2 === 0) ? e * 2 : e)
      .map(x => +x)
      .map(x => (x > 9) ? x - 9 : x)
      .reverse();;
  }

  get checksum() {
    return this.addends.reduce((x, y) => x + y);
  }

  get valid() {
    return this.checksum % 10 === 0;
  }

  static create(num) {
    let chksm = new Luhn(num * 10).checksum % 10
    return (num * 10) + (chksm === 0 ? 0 : 10 - chksm);
  }
}

module.exports = Luhn;
