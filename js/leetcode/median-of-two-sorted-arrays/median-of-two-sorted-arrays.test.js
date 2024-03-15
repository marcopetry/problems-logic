import findMedianSortedArrays from "./median-of-two-sorted-arrays";
test("case 1 expected 2", () => {
  const arr1 = [1, 3];
  const arr2 = [2];
  expect(findMedianSortedArrays(arr1, arr2)).toBe(2);
});

test("case 2 expected 2.5", () => {
  const arr1 = [1, 2];
  const arr2 = [3, 4];
  expect(findMedianSortedArrays(arr1, arr2)).toBe(2.5);
});

test("case 3 expected 2.5", () => {
  const arr1 = [1];
  const arr2 = [3];
  expect(findMedianSortedArrays(arr1, arr2)).toBe(2);
});

test("case 4 expected -1", () => {
  const arr1 = [3];
  const arr2 = [-2, -1];
  expect(findMedianSortedArrays(arr1, arr2)).toBe(-1);
});

test("case 5 expected 2", () => {
  const arr1 = [2];
  const arr2 = [];
  expect(findMedianSortedArrays(arr1, arr2)).toBe(2);
});

test("case 6 expected 2", () => {
  const arr1 = [100001];
  const arr2 = [100000];
  expect(findMedianSortedArrays(arr1, arr2)).toBe(100000.5);
});

test("case 7 expected 4", () => {
  const arr1 = [100000];
  const arr2 = [100001];
  expect(findMedianSortedArrays(arr1, arr2)).toBe(100000.5);
});

test("case 8 expected 2", () => {
  const arr1 = [];
  const arr2 = [5];
  expect(findMedianSortedArrays(arr1, arr2)).toBe(5);
});

test("case 9 expected 2", () => {
  const arr1 = [1, 3];
  const arr2 = [2, 7];
  expect(findMedianSortedArrays(arr1, arr2)).toBe(2.5);
});
