import containsNearbyDuplicate from "./contains-duplicate-ii";

test("case 1 expected true", () => {
  const input = [1,2,3,1], k = 3;
  const expected = true;
  expect(containsNearbyDuplicate(input, k)).toBe(expected);
});

test("case 2 expected true", () => {
  const input = [1,0,1,1], k = 1;
  const expected = true;
  expect(containsNearbyDuplicate(input, k)).toBe(expected);
});

test("case 3 expected false", () => {
  const input = [1,2,3,1,2,3], k = 2;
  const expected = false;
  expect(containsNearbyDuplicate(input, k)).toBe(expected);
});

test("case 4 expected true", () => {
  const input = [0,1,2,3,4,5,0], k = 6;
  const expected = true;
  expect(containsNearbyDuplicate(input, k)).toBe(expected);
});
