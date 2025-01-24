import { expect, test } from "@jest/globals";
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
