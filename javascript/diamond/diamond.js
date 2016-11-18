function Diamond() { /* constructor */ }

Diamond.prototype = {
  makeDiamond: myMakeDiamond
}

module.exports = Diamond;

function myMakeDiamond(str) {
  const A = 'A'.charCodeAt(0);
  const blank = n => Array.from({length: n}).join(' ');
  
  const inner = (s, a = []) => {
    const margin  = blank(a.length + 1);
    const letter  = s.charCodeAt(0);
    const padding = blank((letter - A) * 2);

    return (s === 'A')
      ? [margin + s + margin].concat(a)
      : inner(
          String.fromCharCode(letter - 1),
          [margin + s + padding + s + margin].concat(a)
        );
  }

  const parse = a => a
    .concat(a.slice(0, -1).reverse())
    .map(s => s + '\n')
    .join('');

  return parse(inner(str));
}
