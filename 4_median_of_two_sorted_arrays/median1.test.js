const median = require('./median1');

test('median of [1,3] and [2] is 2', () => {
  expect(median([1,3],[2])).toBe(2);
})

test('median of [1,2] and [3,4] is 2.5', () => {
  expect(median([1,2],[3,4])).toBe(2.5);
})

test('median of [0,0] and [0,0] is 0', () => {
  expect(median([0,0],[0,0])).toBe(0);
})

test('median of [] and [1] is 1', () => {
  expect(median([],[1])).toBe(1);
})

test('median of [2] and [] is 2', () => {
  expect(median([2],[])).toBe(2);
})
