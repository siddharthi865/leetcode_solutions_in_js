const threeSum = require("./3sum2");

test("3sum of  [-1,0,1,2,-1,-4] is [[-1,-1,2],[-1,0,1]]", () => {
  expect(threeSum([-1, 0, 1, 2, -1, -4])).toStrictEqual([
    [-1, -1, 2],
    [-1, 0, 1],
  ]);
});

test("Longest Common Prefix in [] is []", () => {
  expect(threeSum([])).toStrictEqual([]);
});

test("Longest Common Prefix in [0] is []", () => {
  expect(threeSum([0])).toStrictEqual([]);
});
