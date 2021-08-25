const isValid = require("./3sumclosest2");

test("The sum that is closest to the target is 2", () => {
  expect(isValid([-1, 2, 1, -4], 1)).toBe(2);
});

test("The sum that is closest to the target is 0", () => {
  expect(isValid([0, 0, 0], 1)).toBe(0);
});
