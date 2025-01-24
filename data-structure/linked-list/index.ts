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
}
