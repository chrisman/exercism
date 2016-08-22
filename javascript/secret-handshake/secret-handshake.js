'use strict'

const CODE = [
  'wink', 'double blink', 'close your eyes', 'jump'
];

function SecretHandshake(n) {
  if (!/[0-9]/.test(n))
    throw 'Handshake must be a number';

  this.num = n;
}

SecretHandshake.prototype.commands = function() {
  const REVERSE = 16 & this.num;

  let result = CODE
    .filter((_, i) => this.num & 1 << i);

  return (REVERSE) ? result.reverse() : result;
}

module.exports = SecretHandshake;
