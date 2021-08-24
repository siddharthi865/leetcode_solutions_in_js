const intToRoman = require("./itr3");

test("3 converted to roman would be III", () => {
  expect(intToRoman(3)).toBe("III");
});

test("4 converted to roman would be IV", () => {
  expect(intToRoman(4)).toBe("IV");
});

test("9 converted to roman would be IX", () => {
  expect(intToRoman(9)).toBe("IX");
});

test("58 converted to roman would be LVIII", () => {
  expect(intToRoman(58)).toBe("LVIII");
});

test("1994 converted to roman would be MCMXCIV", () => {
  expect(intToRoman(1994)).toBe("MCMXCIV");
});
