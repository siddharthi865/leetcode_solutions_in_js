const isValid = require("./valid2");

test("() is a valid parentheses", () => {
  expect(isValid("()")).toBe(true);
});

test("()[]{} is a valid parentheses", () => {
  expect(isValid("()[]{}")).toBe(true);
});

test("(] is not a valid parentheses", () => {
  expect(isValid("(]")).toBe(false);
});

test("([)] is not a valid parentheses", () => {
  expect(isValid("([)]")).toBe(false);
});

test("{[]} is a valid parentheses", () => {
  expect(isValid("{[]}")).toBe(true);
});
