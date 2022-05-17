const twoSum = require("./1");

test("Array => [[1,2],[2,3],[2,5]] and target = [[2,1],[1,4]] should return Output => [2,1]", () => {
  expect(
    twoSum(
      [
        [1, 2],
        [2, 3],
        [2, 5],
      ],
      [
        [2, 1],
        [1, 4],
      ]
    )
  ).toEqual([2, 1]);
});

test("Array => [[1,1],[2,2],[3,3]] and target = [[1,3],[1,1]] should return Output => [1,3]", () => {
  expect(
    twoSum(
      [
        [1, 1],
        [2, 2],
        [3, 3],
      ],
      [
        [1, 3],
        [1, 1],
      ]
    )
  ).toEqual([1, 3]);
});
