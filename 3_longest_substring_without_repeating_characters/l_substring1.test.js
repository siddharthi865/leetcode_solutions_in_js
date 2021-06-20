const answer = require('./l_substring1');

test('Longest substring in abcabcbb is of length 3', () => {
  expect(answer('abcabcbb')).toBe(3);
});

test('Longest substring in pwwkew is of length 3', () => {
  expect(answer('pwwkew')).toBe(3);
});

test('Longest substring in empty string is of length 0', () => {
  expect(answer('')).toBe(0);
});