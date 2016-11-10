function Bucket(name, size) {
  this.name = name;
  this.size = size;
  this.level = 0;
}

Bucket.prototype.fill = function() {
 this.level = this.size;
}

Bucket.prototype.empty = function() {
  this.level = 0;
}

Bucket.prototype.pour = function(b) {
  let d = Math.min(b.size - b.level, this.level);

  b.level += d;
  this.level -= d;
}

module.exports = Bucket;
