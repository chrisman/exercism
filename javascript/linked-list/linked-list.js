'use strict'

class Node {
  constructor(data) {
    this._data = data || null;
    this._next; this._prev;
  }

  get data() {
    return this._data;
  }

  get next() {
    return this._next;
  }

  set next(node) {
    this._next = node;
    return this;
  }

  get prev() {
    return this._prev;
  }

  set prev(node) {
    this._prev = node;
    return this;
  }
}

class List {
  constructor() {
    this.head      = new Node(null);
    this.tail      = new Node(null);
    this.head.next = this.tail;
    this.tail.prev = this.head;

    return this;
  }

  push(d) {
    let node       = new Node(d);
    let last       = this.tail.prev;
    last.next      = node;
    node.prev      = last;
    node.next      = this.tail;
    this.tail.prev = node;

    return this;
  }

  pop() {
    let last       = this.tail.prev;
    last.prev.next = this.tail;
    this.tail.prev = last.prev;

    return last.data;
  }

  unshift(d) {
    let node       = new Node(d);
    let first      = this.head.next;
    this.head.next = node;
    first.prev     = node;
    node.next      = first;
    node.prev      = this.head;

    return this;
  }

  shift() {
    let first       = this.head.next;
    this.head.next  = first.next;
    first.next.prev = this.head;

    return first.data;
  }

  count() {
    let c    = 0;
    let node = this.head;

    while (node.next !== this.tail) {
      node = node.next;
      c++;
    }

    return c;
  }

  delete(d) {
    let node = this.head;

    while(node.next.data !== d) {
      node = node.next;
    }

    node.next      = node.next.next;
    node.next.prev = node;

    return this;
  }
}

module.exports = List;
