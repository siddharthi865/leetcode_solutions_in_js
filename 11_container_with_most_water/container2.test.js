const maxArea = require("./container2");

test("Maximum area that can be filled is", () => {
  expect(maxArea([1, 8, 6, 2, 5, 4, 8, 3, 7])).toBe(49);
});

test("Maximum area that can be filled is", () => {
  expect(maxArea([1, 1])).toBe(1);
});

test("Maximum area that can be filled is", () => {
  expect(maxArea([4, 3, 2, 1, 4])).toBe(16);
});

test("Maximum area that can be filled is", () => {
  expect(maxArea([1, 2, 1])).toBe(2);
});
