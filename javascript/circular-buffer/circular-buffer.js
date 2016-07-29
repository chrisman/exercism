const emptyException = () =>
  "Cannot read empty buffer";
const fullException = () =>
  "Use forceWrite to overwrite buffer";

function buffer(size) {
  var b = new Array();
  var size = size;

  return {
    read: function() {
      if (b[0]) return b.shift();
      else throw emptyException();
    },
    write: function(val) {
      if (b.length == size) throw fullException();
      else if (val) b.push(val);
    },
    forceWrite: function(val) {
      if (b.length < size) {
        this.write(val);
      } else {
        b.shift(); b.push(val);
      }
    },
    clear: function() {
      b = new Array();
    }
  }
}

module.exports = {
  circularBuffer: buffer,
  bufferEmptyException: emptyException,
  bufferFullException: fullException
}
