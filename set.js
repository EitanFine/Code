class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

class Set {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }

  push(val) {
    let newNode = new Node(val);

    if (!this.head) {
      this.head = newNode;
      this.tail = this.head;
    } else {
      let current = this.head;
      while (current) {
        if (current.val === val) {
          return "Already Exisits";
        }
        current = current.next;
      }
      this.tail.next = newNode;
      this.tail = newNode;
    }
    this.length++;
    return this;
  }

  pop() {
    if (!this.head) return undefined;

    let current = this.head;
    let newTail = current;

    while (current.next) {
      newTail = current;
      current = current.next;
    }

    this.tail = newTail;
    this.tail.next = null;
    this.length--;
    if (this.length === 0) {
      this.head = null;
      this.tail = null;
    }
    return current;
  }

  get(index) {
    if (index < 0 || index >= this.length) return null;

    let counter = 0;
    let current = this.head;
    while (counter !== index) {
      current = current.next;
      counter++;
    }
    return current;
  }

  remove(index) {
    if (index < 0 || index >= this.length) return undefined;
    if (index === 0) return this.shift();
    if (index === this.length - 1) return this.pop();

    let previousNode = this.get(index - 1);
    let removed = previousNode.next;
    previousNode.next = removed.next;
    this.length--;
    return removed;
  }

  size() {
    return this.length;
  }

  clear() {
    this.head = null;
    this.head.next = null;
    this.tail = null;
    this.length = 0;
    return this.length;
  }

  has(val) {
    let current = this.head;
    while (current) {
      if (current.val === val) {
        return true;
      } else {
        current = current.next;
      }
    }
    return false;
  }
  print() {
    let current = this.head;
    let arr = [];
    if (!this.head) return [];
    while (current) {
      arr.push(current.val);
      current = current.next;
    }
    return arr;
  }
}
