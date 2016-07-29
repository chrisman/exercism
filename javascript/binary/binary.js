class Binary {
  constructor(num) {
    this.num = num;
  }

  toDecimal() {
    return this._invalid(this.num) 
      ? 0 
      : this._recur(this.num);
  }

  _recur(num) {
    let len = num.length - 1;
    let head = num[0];
    let tail = num.slice(1);
    
    if (len === 0) 
      return +head;

    return head * Math.pow(2, len) + this._recur(tail);
  }

  _invalid(num) {
    return /[^01]/.test(num);
  }
}

module.exports = Binary;
