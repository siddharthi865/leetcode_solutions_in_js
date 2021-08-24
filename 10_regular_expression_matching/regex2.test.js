const isMatch = require("./regex2");

test('"a" matches "aa"', () => {
  expect(isMatch("aa", "a")).toBe(false);
});

test('"a*" matches "aa"', () => {
  expect(isMatch("aa", "a*")).toBe(true);
});

test('".*" matches "ab"', () => {
  expect(isMatch("ab", ".*")).toBe(true);
});

test('"c*a*b" matches "aab"', () => {
  expect(isMatch("aab", "c*a*b")).toBe(true);
});

test('"mis*is*p*." matches "mississippi"', () => {
  expect(isMatch("mississippi", "mis*is*p*.")).toBe(false);
});
