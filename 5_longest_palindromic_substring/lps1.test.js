const lps = require('./lps1');

test('longest palindrome in string "babad" is "bab"', () => {
  expect(lps('babad')).toBe('bab');
})

test('longest palindrome in string "cbbd" is "bb"', () => {
  expect(lps('cbbd')).toBe('bb');
})

test('longest palindrome in string "a" is "a"', () => {
  expect(lps('a')).toBe('a');
})

test('longest palindrome in string "ac" is "a"', () => {
  expect(lps('ac')).toBe('a');
})
