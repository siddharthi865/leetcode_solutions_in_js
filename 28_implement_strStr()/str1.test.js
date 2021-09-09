const strStr = require("./str1");

test("() is a valid parentheses", () => {
  expect(strStr("hello", "ll")).toBe(2);
});

test("()[]{} is a valid parentheses", () => {
  expect(strStr("aaaaa", "bba")).toBe(-1);
});

test("()[]{} is a valid parentheses", () => {
  expect(strStr("", "")).toBe(0);
});
