const WEIRDCASE = 'Prime is not possible';
const VALID = (x) => (
  typeof x === 'number'
  && x > 0
);

function nth(n) {
  if (!VALID(n)) throw WEIRDCASE;

  let len  = this.cache.length;
  let last = this.cache[len - 1];

  let inner = () => {
    if (n === len)
      return last;
    else {
      do { 
        last++ 
      } while (
        this.cache.some(x => last % x === 0)
      )
    }

    this.cache.push(last);
  }


  while (this.cache.length < n)
    inner();

  return last;
}

module.exports = {
  cache: [2],
  nth: nth
};
