const removeDuplicates = require("./remove1");

test("() is a valid parentheses", () => {
  expect(removeDuplicates([3, 2, 2, 3], 3)).toBe(2);
});

test("()[]{} is a valid parentheses", () => {
  expect(removeDuplicates([0, 1, 2, 2, 3, 0, 4, 2], 2)).toBe(5);
});
