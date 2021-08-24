const romanToInt = require("./rti2");

test("III converted to integer would be 3", () => {
  expect(romanToInt("III")).toBe(3);
});

test("4 converted to integer would be IV", () => {
  expect(romanToInt("IV")).toBe(4);
});

test("9 converted to integer would be IX", () => {
  expect(romanToInt("IX")).toBe(9);
});

test("58 converted to integer would be LVIII", () => {
  expect(romanToInt("LVIII")).toBe(58);
});

test("1994 converted to integer would be MCMXCIV", () => {
  expect(romanToInt("MCMXCIV")).toBe(1994);
});
