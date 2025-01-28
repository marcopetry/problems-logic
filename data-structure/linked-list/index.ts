class Node {
  public value: number;
  public next: Node | null;
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

export class LinkedList {
  public head: Node | null;
  public tail: Node | null;
  public length: number;

  constructor(value?: number) {
    this.head = new Node(value);
    this.tail = this.head;
    this.length = value ? 1 : 0;
  }

  push(value: number) {
    let newNode = new Node(value);

    if (this.length === 0) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      this.tail!.next = newNode;
      this.tail = newNode;
    }

    this.length++;
    return this;
  }

  pop() {
    if (this.length < 1) return undefined;

    let temp = this.head;
    let nextValue = this.head?.next;
    const lastItem = this.tail;

    if (this.length === 1) {
      this.head = null;
      this.tail = null;
    } else {
      while (nextValue?.next) {
        temp = nextValue;
        nextValue = nextValue.next;
      }
      this.tail = temp;
      this.tail!.next = null;
    }

    this.length--;
    return lastItem;
  }

  unshift(value: number) {
    const newNode = new Node(value);

    if (this.length === 0) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      let temp = this.head;
      this.head = newNode;
      this.head.next = temp;
    }

    this.length++;

    return this;
  }

  shift() {
    if (this.length === 0) {
      return null;
    }

    const firstItem = this.head;
    if (this.length === 1) {
      this.head = null;
      this.tail = null;
    } else {
      this.head = this.head!.next;
    }

    this.length--;

    return firstItem;
  }

  get(index: number) {
    if (index < 0 || index >= this.length) return undefined;

    let node = this.head;

    for (let i = 0; i < index; i++) {
      node = node?.next!;
    }

    return node;
  }

  set(index: number, value: number) {
    let node = this.get(index);

    if (node) {
      node.value = value;
      return true;
    }

    return false;
  }

  insert(index: number, value: number) {
    if (index < 0 || index > this.length) return false;

    if (index === 0) {
      this.unshift(value);
      return true;
    }

    if (index === this.length) {
      this.push(value);
      return true;
    }

    let node = this.get(index - 1)!;
    let next = node?.next;

    let newNode = new Node(value);
    node.next = newNode;
    newNode.next = next;

    this.length++;

    return true;
  }

  remove(index: number) {
    if (index < 0 || index >= this.length) return null;

    if (index === 0) return this.shift();

    if (index === this.length - 1) return this.pop();

    let prevNode = this.get(index - 1)!;

    let nodeToRemove = prevNode?.next;

    prevNode.next = nodeToRemove?.next ?? null;

    this.length--;
    return nodeToRemove;
  }

  reverse() {
    let temp: Node = this.head!;
    this.head = this.tail;
    this.tail = temp;

    let prev: Node | null = null;
    let next = temp?.next;

    for (let i = 0; i < this.length; i++) {
      next = temp?.next ?? null;
      temp.next = prev;
      prev = temp;
      if (next) temp = next;
    }

    return this;
  }
}
