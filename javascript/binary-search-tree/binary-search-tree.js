function Node(d) {
  this.data  = d,
  this.left  = null,
  this.right = null
}

function BinarySearchTree(d) {
  Node.call(this, d);

  this.left  = new Node();
  this.right = new Node();
}

BinarySearchTree.prototype = {
  constructor : BinarySearchTree,
  insert      : myInsert,
  each        : myEach
};

module.exports = BinarySearchTree;

function myInsert(d) {

  function inner(n, d) {
    if (!n.data) {
      n.data  = d;
      n.left  = new Node();
      n.right = new Node();
      return;
    }

    if (d <= n.data) 
      inner(n.left, d);
    if (d > n.data) 
      inner(n.right, d);
  }

  return inner(this, d);
}

function myEach(fn) {

  function inner(n, f) {
    if (n.left.data) 
      inner(n.left, f);

    f(n.data);

    if (n.right.data) 
      inner(n.right, f);
  }

  return inner(this, fn);
}
