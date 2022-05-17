var countQuadruplets = function (nums) {
  let n = nums.length,
    res = 0;

  for (let i = 0; i < n; i++) {
    for (let j = i + 1; j < n; j++) {
      for (let k = j + 1; k < n; k++) {
        for (let m = k + 1; m < n; m++) {
          if (nums[i] + nums[j] + nums[k] == nums[m]) {
            res++;
          }
        }
      }
    }
  }
  return res;
};

console.log(countQuadruplets([1, 1, 1, 3, 5]));
