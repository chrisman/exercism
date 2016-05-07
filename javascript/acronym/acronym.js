// regex //
const CAMEL_CASE = /([a-z])([A-Z][a-z])/g;
const TO_SPACES = '$1 $2';
const SPLITS = /[\s-]/;

// helpers //
var head = s => s[0];
var upper = s => s.toUpperCase();
var acronym = x => upper(head(x));
var add = (x, y) => x + y;

var parse = s => s
  .replace(CAMEL_CASE, TO_SPACES)
  .split(SPLITS)
  .map(acronym)
  .reduce(add);

module.exports = {
  parse: parse
}
