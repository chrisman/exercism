// regex //
const CAMEL_CASE = /([a-z])([A-Z][a-z])/g;
const CAMEL_TO_SPACE = '$1 $2';
const SPLITS = /[\s-]/;

// helpers //
var head = s => s[0];
var upper = s => s.toUpperCase();

var parse = s => s
  .replace(CAMEL_CASE, CAMEL_TO_SPACE)
  .split(SPLITS)
  .map( e => upper(head(e)))
  .join('');

module.exports = {
  parse: parse
}
