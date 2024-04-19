import reverseInteger from "./reverse-integer";

test("case 1 expected 321", () => {
  const input = 123;
  const expected = 321;
  expect(reverseInteger(input)).toBe(expected);
});

test("case 2 expected -321", () => {
  const input = -123;
  const expected = -321;
  expect(reverseInteger(input)).toBe(expected);
});

test("case 3 expected 21", () => {
  const input = 120;
  const expected = 21;
  expect(reverseInteger(input)).toBe(expected);
});

test("case 4 expected 0", () => {
  const input = 1534236469;
  const expected = 0;
  expect(reverseInteger(input)).toBe(expected);
});
