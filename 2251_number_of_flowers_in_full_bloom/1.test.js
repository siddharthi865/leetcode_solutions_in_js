const twoSum = require("./1");

test("Array => [[1,6],[3,7],[9,12],[4,13]] and target = [2,3,7,11] should return Output => [1,2,2,2]", () => {
  expect(
    twoSum(
      [
        [1, 6],
        [3, 7],
        [9, 12],
        [4, 13],
      ],
      [2, 3, 7, 11]
    )
  ).toEqual([1, 2, 2, 2]);
});

test("Array => [[1,10],[3,3]] and target = [3,3,2] should return Output => [2,2,1]", () => {
  expect(
    twoSum(
      [
        [1, 10],
        [3, 3],
      ],
      [3, 3, 2]
    )
  ).toEqual([2, 2, 1]);
});
