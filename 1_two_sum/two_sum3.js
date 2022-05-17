const twoSum = function (nums, target) {
  let sol = [];
  for (i = 0; i < nums.length; i++) {
    for (j = i + 1; j < nums.length; j++) {
      if (nums[i] + nums[j] === target) sol = [i, j];
    }
    if (sol.length > 0) break;
  }
  return sol;
};

module.exports = twoSum;
