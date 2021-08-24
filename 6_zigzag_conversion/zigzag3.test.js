const convert = require("./zigzag3");

test('Zigzag conversion of "PAYPALISHIRING" is "PAHNAPLSIIGYIR"', () => {
  expect(convert("PAYPALISHIRING", 3)).toBe("PAHNAPLSIIGYIR");
});

test('Zigzag conversion of "PAYPALISHIRING" is "PINALSIGYAHRPI"', () => {
  expect(convert("PAYPALISHIRING", 4)).toBe("PINALSIGYAHRPI");
});

test('Zigzag conversion of "A" is "A"', () => {
  expect(convert("A", 1)).toBe("A");
});
