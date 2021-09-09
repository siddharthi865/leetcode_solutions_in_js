const removeDuplicates = require("./remove1");

test("() is a valid parentheses", () => {
  expect(removeDuplicates([1, 1, 2])).toBe(2);
});

test("()[]{} is a valid parentheses", () => {
  expect(removeDuplicates([0, 0, 1, 1, 1, 2, 2, 3, 3, 4])).toBe(5);
});
