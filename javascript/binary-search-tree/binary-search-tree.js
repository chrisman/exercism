function Node(d) {
  this.data  = d,
  this.left  = null,
  this.right = null
}

function BinarySearchTree(d) {
  Node.call(this, d);
}

BinarySearchTree.prototype = {
  constructor : BinarySearchTree,
  insert      : myInsert,
  each        : myEach
};

module.exports = BinarySearchTree;

function myInsert(d) {

  function inner(n, d) {
    if (d <= n.data) {
      if (!n.left)
        n.left = new Node(d);
      else 
        return inner(n.left, d);
    }
    else if (d > n.data) {
      if (!n.right)
        n.right = new Node(d);
      else 
        return inner(n.right, d);
    }
  }

  return inner(this, d);
}

function myEach(fn) {

  function inner(n, cb) {
    if (n.left) inner(n.left, cb);
    cb(n.data);
    if (n.right) inner(n.right, cb);
  }

  return inner(this, fn);
}
