// http://stackoverflow.com/questions/14766951/convert-digits-into-words-with-javascript

// STRINGS //
const ONES = [
  ''        , 'one'     , 'two'       , 'three'    , 'four'     ,
  'five'    , 'six'     , 'seven'     , 'eight'    , 'nine'     ,
  'ten'     , 'eleven'  , 'twelve'    , 'thirteen' , 'fourteen' ,
  'fifteen' , 'sixteen' , 'seventeen' , 'eighteen' , 'nineteen'
];
const TENS = [
  ''      , ''      , 'twenty'  , 'thirty' , 'forty'  ,
  'fifty' , 'sixty' , 'seventy' , 'eighty' , 'ninety'
];
const SCALE = [
  ''           , 'thousand'    , 'million'     , 'billion'    ,
  'trillion'   , 'quadrillion' , 'quintillion' , 'sextillion' ,
  'septillion' , 'octillion'   , 'nonillion'
];

// RANGE VALIDATION //
const MIN = 0;
const MAX = 999999999999;
const ERROR = {
  // i altered the tests to make MAX work w/o commas:
  range: `Number must be between ${MIN} and ${MAX}.`
}
const inRange = n => n >= MIN && n <= MAX;

module.exports = {
  inEnglish: function(n) {
    if (comp(not)(inRange)(n)) throw ERROR.range;
    if (typeof n === 'number') return this.inEnglish(str(n));
    if (n === '0')             return 'zero';

    const makeGroup = ([ones, tens, huns]) => [
        num(huns) === 0 
          ? '' 
          : `${ONES[huns]} hundred `,
        num(ones) === 0 
          ? TENS[tens] 
          : TENS[tens] && TENS[tens] + '-' || '',
        ONES[tens + ones] || ONES[ones]
      ].join('');

    const places = (group, i) => isEmpty(group) 
      ? group 
      : `${group} ${SCALE[i]}`;

    return comp (chunk(3)) (reverse) (arr(n))
      .map(makeGroup)
      .map(places)
      .filter(comp(not)(isEmpty))
      .reverse()
      .join(' ')
      .trim();
  }
}

// HELPERS //
const arr      =  x => Array.from(x);
const chunk    =  n => xs => 
  isEmpty(xs) ? [] : [take(n)(xs), ...chunk (n) (drop (n) (xs))];
const comp     =  f => g => x => f (g (x));
const drop     =  n => xs => xs.slice(n);
const isEmpty  =  xs => xs.length === 0;
const not      =  x => !x;
const num      =  x => Number(x) || 0;
const reverse  =  xs => xs.slice(0).reverse();
const str      =  x => String(x);
const take     =  n => xs => xs.slice(0,n);

