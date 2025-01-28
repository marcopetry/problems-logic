import { describe, expect, test } from "@jest/globals";
import { LinkedList } from ".";

test("Test initial value in linked list", () => {
  const linkedList = new LinkedList(1);
  expect(linkedList.head?.value).toBe(1);
});

test("Test initial null value in linked list", () => {
  const linkedList = new LinkedList();
  expect(linkedList.head?.value).toBeUndefined();
});

test("Test 3 items push method in linked list", () => {
  const linkedList = new LinkedList(1);
  expect(linkedList.head?.value).toBe(1);

  linkedList.push(2);
  linkedList.push(3);

  expect(linkedList.length).toBe(3);
  expect(linkedList.tail?.value).toBe(3);
  expect(linkedList.tail?.next).toBe(null);
});

test("Test 3 items in linked list with method pop", () => {
  const linkedList = new LinkedList(1);
  linkedList.push(2);
  linkedList.push(3);

  let lastItemRemove = linkedList.pop();
  expect(lastItemRemove?.value).toBe(3);
  expect(linkedList.length).toBe(2);
  expect(linkedList.tail?.value).toBe(2);

  lastItemRemove = linkedList.pop();
  expect(lastItemRemove?.value).toBe(2);
  expect(linkedList.length).toBe(1);
  expect(linkedList.tail?.value).toBe(1);

  lastItemRemove = linkedList.pop();
  expect(lastItemRemove?.value).toBe(1);
  expect(linkedList.length).toBe(0);
  expect(linkedList.tail?.value).toBeUndefined();

  expect(linkedList.head).toBeNull();
});

describe("Test method unshif", () => {
  test("Add item to empty list", () => {
    const linkedList = new LinkedList();

    linkedList.unshift(1);

    expect(linkedList.head?.value).toBe(1);
    expect(linkedList.tail?.value).toBe(1);
    expect(linkedList.head).toBe(linkedList.tail);
    expect(linkedList.length).toBe(1);
  });

  test("Add item in list", () => {
    const linkedList = new LinkedList(2);

    expect(linkedList.head?.value).toBe(2);

    linkedList.unshift(1);

    expect(linkedList.head?.value).toBe(1);
    expect(linkedList.tail?.value).toBe(2);
    expect(linkedList.length).toBe(2);
  });

  test("Return list", () => {
    const linkedList = new LinkedList(2);

    expect(linkedList.head?.value).toBe(2);

    const returnedList = linkedList.unshift(1);

    expect(linkedList).toBe(returnedList);
  });
});

describe("Test cases for shift method", () => {
  test("If the list is empty (head is null), return null.", () => {
    const linkedList = new LinkedList();

    const returnShiftMethod = linkedList.shift();

    expect(returnShiftMethod).toBeNull();
  });

  test("Unshift in list with 1 item", () => {
    const linkedList = new LinkedList(1);

    const returnShiftMethod = linkedList.shift();

    expect(returnShiftMethod?.value).toBe(1);
    expect(linkedList.head).toBeNull();
    expect(linkedList.tail).toBeNull();
    expect(linkedList.length).toBe(0);
  });

  test("Unshift in list with more items", () => {
    const linkedList = new LinkedList(1);

    linkedList.push(2);
    linkedList.push(3);
    linkedList.push(4);

    const returnShiftMethod = linkedList.shift();

    expect(returnShiftMethod?.value).toBe(1);
    expect(linkedList.head?.value).toBe(2);
    expect(linkedList.tail?.value).toBe(4);
    expect(linkedList.length).toBe(3);
  });
});

describe("Test cases to get node in linked list", () => {
  const linkedList = new LinkedList(1);

  linkedList.push(2);
  linkedList.push(3);
  linkedList.push(4);
  linkedList.push(5);
  linkedList.push(6);
  linkedList.push(7);

  test("Test index outside list", () => {
    let node = linkedList.get(-1);
    expect(node).toBeUndefined();

    node = linkedList.get(linkedList.length);
    expect(node).toBeUndefined();
  });

  test("Test get index list", () => {
    let node = linkedList.get(0);
    expect(node?.value).toBe(1);

    node = linkedList.get(5);
    expect(node?.value).toBe(6);
  });
});

describe("Test cases to set method in linked list", () => {
  const linkedList = new LinkedList(1);

  linkedList.push(2);
  linkedList.push(3);
  linkedList.push(4);
  linkedList.push(5);
  linkedList.push(6);
  linkedList.push(7);

  test("test to try set invalid index", () => {
    expect(linkedList.set(-1, 10)).toBe(false);
    expect(linkedList.set(7, 10)).toBe(false);
  });

  test("test set valid index", () => {
    expect(linkedList.set(0, 10)).toBe(true);
    expect(linkedList.head?.value).toBe(10);

    expect(linkedList.set(1, 20)).toBe(true);
    expect(linkedList.head?.next?.value).toBe(20);

    expect(linkedList.set(6, 60)).toBe(true);
    expect(linkedList.tail?.value).toBe(60);
  });
});

describe("Test cases to insert method in linked list", () => {
  test("test insert in invalid index", () => {
    const linkedList = new LinkedList(1);

    linkedList.push(2);
    linkedList.push(3);
    linkedList.push(4);
    linkedList.push(5);
    linkedList.push(6);
    linkedList.push(7);

    expect(linkedList.insert(-1, 10)).toBe(false);
    expect(linkedList.insert(8, 10)).toBe(false);
  });

  test("test insert in first item", () => {
    const linkedList = new LinkedList(1);

    linkedList.push(2);
    linkedList.push(3);
    linkedList.push(4);
    linkedList.push(5);
    linkedList.push(6);
    linkedList.push(7);

    expect(linkedList.insert(0, 10)).toBe(true);
    expect(linkedList.head?.value).toBe(10);
    expect(linkedList.length).toBe(8);
  });

  test("test insert in last item", () => {
    const linkedList = new LinkedList(1);

    linkedList.push(2);
    linkedList.push(3);
    linkedList.push(4);
    linkedList.push(5);
    linkedList.push(6);
    linkedList.push(7);

    expect(linkedList.insert(7, 10)).toBe(true);
    expect(linkedList.tail?.value).toBe(10);
    expect(linkedList.length).toBe(8);
  });

  test("test insert in middle list", () => {
    const linkedList = new LinkedList(1);

    linkedList.push(2);
    linkedList.push(3);
    linkedList.push(4);
    linkedList.push(5);
    linkedList.push(6);
    linkedList.push(7);

    expect(linkedList.insert(4, 10)).toBe(true);
    expect(linkedList.get(4)?.value).toBe(10);

    expect(linkedList.length).toBe(8);
  });
});

describe("Test case for remove method", () => {
  test("test indexes outside list", () => {
    const linkedList = new LinkedList(1);
    linkedList.push(2);
    linkedList.push(3);
    linkedList.push(4);
    linkedList.push(5);
    linkedList.push(6);
    linkedList.push(7);

    expect(linkedList.remove(-1)).toBeNull();
    expect(linkedList.remove(linkedList.length)).toBeNull();
  });

  test("test remove fist element", () => {
    const linkedList = new LinkedList(1);
    linkedList.push(2);
    linkedList.push(3);
    linkedList.push(4);
    linkedList.push(5);
    linkedList.push(6);
    linkedList.push(7);

    linkedList.remove(0);
    expect(linkedList.length).toBe(6);
    expect(linkedList.get(0)?.value).toBe(2);
  });

  test("test last element", () => {
    const linkedList = new LinkedList(1);
    linkedList.push(2);
    linkedList.push(3);
    linkedList.push(4);
    linkedList.push(5);
    linkedList.push(6);
    linkedList.push(7);

    linkedList.remove(linkedList.length - 1);
    expect(linkedList.length).toBe(6);
    expect(linkedList.get(linkedList.length - 1)?.value).toBe(6);
  });

  test("test middle element", () => {
    const linkedList = new LinkedList(1);
    linkedList.push(2);
    linkedList.push(3);
    linkedList.push(4);
    linkedList.push(5);
    linkedList.push(6);
    linkedList.push(7);

    const removedElement = linkedList.remove(3);

    expect(removedElement?.value).toBe(4);
    expect(linkedList.length).toBe(6);
    expect(linkedList.get(3)?.value).toBe(5);
  });
});
