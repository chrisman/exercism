const dict = [
  '010202212000',
  '000002002000',
  '010012210000',
  '010012012000',
  '000212002000',
  '010210012000',
  '010210212000',
  '010002002000',
  '010212212000',
  '010212012000'
];

function myConvert(str) {
  const input = str.split('\n');

  const trinary = c => (c === ' ')
    ? 0
    : c === '_' 
    ? 1
    : 2;

  const convert = compose(
    // retn array content
    join(''),

    // number not found
    map(n => n === -1 ? '?' : n),

    // find dictionary index
    map(s => dict.indexOf(s)),

    // map each char to `trinary`
    map(compose(
      join(''),
      map(trinary),
      split('')
    )),

    // build each number
    compose(
      map(join('')),
      zip,
      map(chunk(3))
    )
  )

  // consume multi-line input
  const inner = xs => acc => empty(xs)
    ? acc
    : inner
      (drop(4)(xs))
      (acc.concat(convert(take(4)(xs)))) 

  return inner(input)([])
    .join(',');
}

module.exports = {
  convert: myConvert
};

// HELPERS //
const chunk    =  n => xs => empty(xs) 
  ? []
  : [take(n)(xs), ...chunk(n)(drop(n)(xs))];
const compose  =  (f, ...fs) => empty(fs) 
  ? f
  : (...args) => f(compose(...fs)(...args));
const drop     =  n => xs => xs.slice(n);
const empty    =  xs => xs.length === 0;
const join     =  str => xs => xs.join(str);
const map      =  f => xs => xs.map(f);
const split    =  str => xs => xs.split(str);
const take     =  n => xs => xs.slice(0, n);
const zip      =  xs => xs[0].map((_, i) => xs.map(a => a[i]));
