const fourSum = require("./4sum1");

test("The solution array is : [[-2,-1,1,2],[-2,0,0,2],[-1,0,0,1]]", () => {
  expect(fourSum([1, 0, -1, 0, -2, 2], 0)).toStrictEqual([
    [-2, -1, 1, 2],
    [-2, 0, 0, 2],
    [-1, 0, 0, 1],
  ]);
});

test("The solution array is : [[2,2,2,2]]", () => {
  expect(fourSum([2, 2, 2, 2, 2], 8)).toStrictEqual([[2, 2, 2, 2]]);
});
