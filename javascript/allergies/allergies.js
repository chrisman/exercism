// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Bitwise_Operators#Flags_and_bitmasks
const FLAGS = {
  'eggs'         : 1,  // 00000001
  'peanuts'      : 2,  // 00000010
  'shellfish'    : 4,  // 00000100
  'strawberries' : 8,  // 00001000
  'tomatoes'     : 16, // 00010000
  'chocolate'    : 32, // 00100000
  'pollen'       : 64, // 01000000
  'cats'         : 128 // 10000000
};

class Allergies {
  constructor(flags) {
    this.flags = flags;
  }

  list() {
    return Object.keys(FLAGS).filter((k) => this.allergicTo(k));
  }

  allergicTo(str) {
    return !!(FLAGS[str] & this.flags);
  }
}

module.exports = Allergies;
