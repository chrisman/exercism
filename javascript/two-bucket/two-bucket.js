/**
 * @constructor
 * @param {number} x - the size of a bucket
 * @param {number} y - the size of a second bucket
 * @param {number} goal - the target level of a bucket
 * @param {string} start - which bucket should reach the target goal. 'one' or 'two'
 */
function TwoBucket(x, y, goal, start) {
  this.x = new Bucket(start, (start === 'one') ? x : y);
  this.y = new Bucket((start === 'one') ? 'two' : 'one', (start === 'one') ? y : x);
  this.goal = goal;

  this.goalBucket = this.x.name;
  this.otherBucket;
}

/**
 * Returns the number of moves it takes to reach the goal
 * As a side effect, sets `otherBucket` to the final size of the second bucket
 */
TwoBucket.prototype.moves = function() {
  const empty    =  b => b.level === 0;
  const full     =  b => b.level === b.size;
  const some     =  b => b.level > 0;
  const levelIs  =  n => b => b.level === n;
  const done     =  levelIs(this.goal);
  const not      =  x => !x;

  let m = 0;

  do {
    if (empty(this.x))
      this.x.fill();
    else if (full(this.y))
      this.y.empty();
    else if (full(this.x) && some(this.y))
      this.x.pour(this.y);
    else if (empty(this.y) && some(this.x))
      this.x.pour(this.y);

    m++;
  } while (not(done(this.x)));

  this.otherBucket = this.y.size;

  return m;
}

module.exports = TwoBucket;

/**
 * Represents a Bucket
 * @constructor
 * @param {string} name - the name of the bucket
 * @param {number} size - the capacity of the bucket
 */
function Bucket(name, size) {
  this.name = name;
  this.size = size;
  this.level = 0;
}

/**
 * Fills the bucket to its capacity.
 */
Bucket.prototype.fill = function() {
 this.level = this.size;
}

/**
 * Sets the level to zero
 */
Bucket.prototype.empty = function() {
  this.level = 0;
}

/*
 * Pours content into another bucket
 * @param {Bucket} b - a bucket in which to pour
 */
Bucket.prototype.pour = function(b) {
  let d = Math.min(b.size - b.level, this.level);

  b.level += d;
  this.level -= d;
}
