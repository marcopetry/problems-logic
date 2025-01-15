import twoSum from "./two-sum";

test("case 1 expected true", () => {
  const nums = [2, 7, 11, 15];
  const target = 9;
  const expected = [0, 1];
  expect(twoSum(nums, target)).toEqual(expected);
});

test("case 2 expected true", () => {
  const nums = [3, 2, 4];
  const target = 6;
  const expected = [1, 2];
  expect(twoSum(nums, target)).toEqual(expected);
});

test("case 3 expected true", () => {
  const nums = [3, 3];
  const target = 6;
  const expected = [0, 1];
  expect(twoSum(nums, target)).toEqual(expected);
});

test("case 4 expected true", () => {
  const nums = [0, 4, 3, 0];
  const target = 0;
  const expected = [0, 3];
  expect(twoSum(nums, target)).toEqual(expected);
});

test("case 5 expected true", () => {
  const nums = [-3, 4, 3, 90];
  const target = 0;
  const expected = [0, 2];
  expect(twoSum(nums, target)).toEqual(expected);
});
