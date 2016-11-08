const brackets = {
  '{': '}',
  '[': ']',
  '(': ')'
};

function BracketPush(str) {
  let coll = [];

  str.split('').forEach(c => {
    if (has(keys(brackets))(c))
      coll.push(brackets[c]);
    else if (last(coll) === c)
      coll.pop();
    else
      coll.push(c);
  });

  return empty(coll);
}

module.exports = BracketPush;

const empty  =  a => a.length === 0;
const has    =  a => x => a.indexOf(x) !== -1;
const keys   =  o => Object.keys(o);
const last   =  a => a[a.length - 1];
