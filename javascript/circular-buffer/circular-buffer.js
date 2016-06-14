const BUFFER_EMPTY_EXCEPTION = "cannot read empty buffer";
const BUFFER_FULL_EXCEPTION = "cannot write to full buffer";

function bufferException(msg){
  this.message = msg;
  this.name = "BufferException";
}

function circularBuffer(s) {
  let _buffer = Array.from({length: s});
  let undefinedFilter = (e) => typeof e === 'undefined';
  let emptyBuffer = (arr) => arr.filter(undefinedFilter).length === arr.length;

  function read(){
    if (emptyBuffer(_buffer))
      throw new bufferException(BUFFER_EMPTY_EXCEPTION);
    return _buffer.pop();
  };

  function write(x){
    _buffer = _buffer.map(e => x);
  };

  return {
    read: read,
    write: write
  }
}


module.exports = {
  circularBuffer: circularBuffer,
  bufferEmptyException: () =>
    "cannot read empty buffer",
  bufferFullException: () =>
    "cannot write to full buffer"
}
