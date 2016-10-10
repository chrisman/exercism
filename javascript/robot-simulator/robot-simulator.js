const DIRECTIONS = ['north', 'east', 'south', 'west'];
const INSTRUCTIONS = {
  'L' : 'turnLeft',
  'R' : 'turnRight',
  'A' : 'advance'
};

function RobotSimulator() {
  this.bearing;
  this.coordinates = [];
}

RobotSimulator.prototype.orient = function(dir) {
  if (DIRECTIONS.indexOf(dir) === -1)
    throw 'Invalid Robot Bearing';

  this.bearing = dir;
}

RobotSimulator.prototype.turn = function(f) {
  let idx = DIRECTIONS.indexOf(this.bearing);
  let next = f(idx);
  this.orient(DIRECTIONS[next]);
}

RobotSimulator.prototype.turnRight = function() {
  let right = i => (i + 1) % 4;
  this.turn(right);
}

RobotSimulator.prototype.turnLeft = function() {
  let left = i => i === 0 ? 3 : i - 1;
  this.turn(left);
}

RobotSimulator.prototype.at = function(x, y) {
  this.coordinates = [x, y];
}

RobotSimulator.prototype.advance = function() {
  let dir = DIRECTIONS.indexOf(this.bearing);
  let x = this.coordinates[0];
  let y = this.coordinates[1];

  switch (dir) {
    case 0:
      this.coordinates = [x, y + 1];
      break;
    case 1:
      this.coordinates = [x + 1, y];
      break;
    case 2:
      this.coordinates = [x, y - 1];
      break;
    case 3:
      this.coordinates = [x - 1, y];
      break;
  }
}

RobotSimulator.prototype.instructions = function(keys) {
  let key = keys.split('');
  return key.map(k => INSTRUCTIONS[k]);
}

RobotSimulator.prototype.place = function(config) {
  this.at(config.x, config.y);
  this.orient(config.direction);
}

RobotSimulator.prototype.evaluate = function(str) {
  let instructions = this.instructions(str);

  instructions.forEach(i => {
    this[i]();
  });
}

module.exports = RobotSimulator;
