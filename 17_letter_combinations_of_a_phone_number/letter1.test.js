const letterCombinations = require("./letter1");

test('Combination for "23" is ["ad","ae","af","bd","be","bf","cd","ce","cf"]', () => {
  expect(letterCombinations("23")).toStrictEqual([
    "ad",
    "ae",
    "af",
    "bd",
    "be",
    "bf",
    "cd",
    "ce",
    "cf",
  ]);
});

test('Combination for "" is []', () => {
  expect(letterCombinations("")).toStrictEqual([]);
});

test('Combination for "2" is ["a","b","c"]', () => {
  expect(letterCombinations("2")).toStrictEqual(["a", "b", "c"]);
});
