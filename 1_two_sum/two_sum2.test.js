const twoSum = require('./two_sum2');

test('Array => [2,7,11,15] and target = 9 should return Output => [0,1]', () => {
  expect(twoSum([2,7,11,15], 9).reverse()).toEqual([0,1]);
});

test('Array => [3,2,4] and target = 6 should return Output => [1,2]', () => {
  expect(twoSum([3,2,4], 6).reverse()).toEqual([1,2]);
});

test('Array => [3, 3] and target = 6 should return Output => [0,1]', () => {
  expect(twoSum([3, 3], 6).reverse()).toEqual([0,1]);
});
