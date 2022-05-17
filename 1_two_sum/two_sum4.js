var twoSum = function (nums, target) {
  for (var i = 0; i < nums.length; i++) {
    //first number = nums[i]

    //expected second number:
    var expected = target - nums[i];

    // if nums contains the expected second number and if this number has not the same index i, then return: [i, the expected other number index]:
    if (nums.includes(expected) && nums.indexOf(expected) !== i) {
      return [i, nums.indexOf(expected)];

      //exit the loop when the first combination is found:
      break;
    }
  }

  //if no combination is found return an empty array:
  return [];
};

module.exports = twoSum;
