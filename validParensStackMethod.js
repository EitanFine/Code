//Using a Stack

class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

class Stack {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }

  push(val) {
    let newNode = new Node(val);

    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      let temp = this.head;
      this.head = newNode;
      this.head.next = temp;
    }
    return ++this.length;
  }

  pop() {
    if (!this.head) return null;
    let temp = this.head;
    if (this.head === this.tail) {
      this.tail = null;
    }
    this.head = this.head.next;
    this.length--;
    return temp.val;
  }
}

let stack = new Stack();

const balanced_brackets = str => {
  let len = str.length;
  let arr = [];
  let obj = { "]": "[", ")": "(", "}": "{" };

  if (len % 2 !== 0) return false;

  for (let i = 0; i < len; i++) {
    if (str[i] === "[" || str[i] === "(" || str[i] === "{") {
      stack.push(str[i]);
    } else if (stack.head.val !== obj[str[i]]) {
      return false;
    } else {
      stack.pop();
    }
  }
  if (arr.length === 0) return true;
};

console.log(balanced_brackets("([{}({()})]))"));
