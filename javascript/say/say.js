const ONES = {
  0: 'zero'  , 1: 'one'  , 2: 'two' , 3: 'three' ,
  4: 'four'  , 5: 'five' , 6: 'six' , 7: 'seven' ,
  8: 'eight' , 9: 'nine',

  10: 'ten'      , 11: 'eleven'   , 12: 'twelve'  , 13: 'thirteen'  ,
  14: 'fourteen' , 15: 'fifteen'  , 16: 'sixteen' , 17: 'seventeen' ,
  18: 'eighteen' , 19: 'nineteen'
}

const TENS = {
  20: 'twenty' , 30: 'thirty'  , 40: 'forty'  , 50: 'fifty'  ,
  60: 'sixty'  , 70: 'seventy' , 80: 'eighty' , 90: 'ninety'
}


function Say() {}

Say.inEnglish = function(n) {
  if (n < 20)
    return ONES[n];

  if (n % 100 === 0)
    return `${ONES[n / 100]} hundred`;

  if (n % 10)
    return `${TENS[( Math.floor(n / 10) * 10 )]}-${ONES[n % 10]}`;
  return TENS[n];
}

module.exports = Say;
