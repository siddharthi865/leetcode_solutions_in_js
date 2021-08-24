const longestCommonPrefix = require("./lcp2");

test('Longest Common Prefix in ["flower","flow","flight"] is ["fl"]', () => {
  expect(longestCommonPrefix(["flower", "flow", "flight"])).toBe("fl");
});

test('Longest Common Prefix in ["dog","racecar","car"] is ""', () => {
  expect(longestCommonPrefix(["dog", "racecar", "car"])).toBe("");
});
