function Bowling(array) {
  try {
    validate(array);
  } catch(e) {
    console.error(`Given ${array}: ${e}`);
    throw e;
  } finally {
    this.rolls = array;
  }
}

Bowling.prototype = {
  score: myScore
}

module.exports = Bowling;

function myScore() {
  let score = 0;
  let frames = 0;
  const a = this.rolls;

  for(let i = 0; frames < 10;) {
    if (strike(a)(i)) {
      score += 10 + strikeBonus(a)(i);
      frames++;
      i++;
    } else if (spare(a)(i)) {
      score += 10 + spareBonus(a)(i);
      frames++;
      i += 2;
    } else {
      score += frame(a)(i);
      frames++;
      i += 2;
    }
  }

  return score;
}

function validate(array) {
  const validRange = i =>
    i >= 0
    && i <= 10;
  const rangeError = 'Pins must have a value from 0 to 10';

  const invalidCount = (c, i, a) => 
    !(strike)(a)(i)
    && !(spare(a)(i - 1))
    && c + a[i + 1] > 10;
  const countError = 'Pin count exceeds pins on the lane';

  const earlyScore = a => {
    const strikes = a.filter(x => x === 10).length;
    const tooFewFrames = a.length + strikes < 20;
    const missingFillBalls = 
      a.length + strikes === 20
      && a[a.length - 1] === 10;

    return tooFewFrames || missingFillBalls;
  }
  const earlyScoreError = 'Score cannot be taken until the end of the game';

  const extraRolls = a => {
    let spares = 0;
    let strikes = 0;

    a.forEach((_, i, a) => {
      if (spare(a)(i)) spares++;
      if (strike(a)(i)) spares++;
    });

    return a.length - strikes - spares > 20;
  }
  const extraRollsError = 'Should not be able to roll after game is over';

  if (array.some(p => !validRange(p)))
    throw rangeError;

  if (array.some(invalidCount))
    throw countError;

  if (earlyScore(array))
    throw earlyScoreError;

  if (extraRolls(array))
    throw extraRollsError;

}

// dependencies //
const strike       =  a => i => a[i] === 10;
const spare        =  a => i => a[i] + a[i + 1] === 10;
const strikeBonus  =  a => i => a[i + 1] + a[i + 2];
const spareBonus   =  a => i => a[i + 2];
const frame        =  a => i => a[i] + a[i + 1];
