const myAtoi = require("./string_to_integer1");

test('Reverse of "42" is 42', () => {
  expect(myAtoi("42")).toBe(42);
});

test('Reverse of "   -42" is -42', () => {
  expect(myAtoi("   -42")).toBe(-42);
});

test('Reverse of "4193 with words" is 4193', () => {
  expect(myAtoi("4193 with words")).toBe(4193);
});

test('Reverse of "words and 987" is 0', () => {
  expect(myAtoi("words and 987")).toBe(0);
});

test('Reverse of "-91283472332" is -2147483648', () => {
  expect(myAtoi("-91283472332")).toBe(-2147483648);
});
