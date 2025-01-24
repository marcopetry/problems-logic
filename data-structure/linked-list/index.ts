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
    this.length = 1;
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
}
