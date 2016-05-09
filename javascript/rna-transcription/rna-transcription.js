const dict = {
  'C': 'G',
  'G': 'C',
  'A': 'U',
  'T': 'A'
}

var add = (x, y) => x + y;
var lookup = e => dict[e];
var reverse_lookup = e =>
  Object.keys(dict)
    .filter( i => dict[i] === e )
    .reduce(add);
var convert = f => 
  s => Array.from(s)
    .map(f)
    .reduce(add);

module.exports = function() {
  return {
    toRna: convert(lookup),
    toDna: convert(reverse_lookup)
  }
}
