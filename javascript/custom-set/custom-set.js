class CustomSet {
  constructor(args = []) {
    this.set = args.filter(uniq);
  }

  empty() {
    return empty(this.set);
  }

  contains(e) {
    return has(this.set)(e);
  }

  subset(s) {
    return has(join(this.set))(join(s.set));
  }

  disjoint(s) {
    return not(this.set.some(e => has(s.set)(e)));
  }

  eql(s) {
    return join(this.set.sort()) === join(s.set.sort());
  }

  add(x) {
    this.set = this.set
      .concat(x)
      .filter(uniq);

    return this;
  }

  intersection(s) {
    let set = new CustomSet();

    s.set.forEach(e => {
      if (has (this.set)(e))
        set.add(e);
    });

    return set;
  }

  difference(s) {
    let set = new CustomSet();

    this.set.forEach(e => {
      if (not (has (s.set) (e)))
        set.add(e);
    });

    return set;
  }

  union(s) {
    let set = new CustomSet();

    this.set.forEach(e => {
      set.add(e);
    });

    s.set.forEach(e => {
      set.add(e);
    });
    
    return set;
  }

  delete(n) {
    this.set = this.set.filter(e => e !== n);
    return this;
  }

  clear() {
    return new CustomSet();
  }

  size() {
    return this.set.length;
  }

  toList() {
    return this.set;
  }
}

module.exports = CustomSet;

// HELPERS //
const empty = a => a.length === 0;
const has = a => e => a.indexOf(e) !== -1;
const not = x => !x;
const join = a => a.join('');
const uniq = (x, i, a) => a.indexOf(x) === i;
