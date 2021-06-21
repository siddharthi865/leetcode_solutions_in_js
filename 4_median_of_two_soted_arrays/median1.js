var findMedianSortedArrays = (nums1, nums2) => {
  let res = nums1.concat(nums2);
  res.sort((a, b) => a - b);
  let n = res.length;
  let m = n >> 1;
  return n & 1 ? res[m] : (res[m - 1] + res[m]) / 2;
};

console.log(findMedianSortedArrays([1,3],[2,4]))
	
module.exports = findMedianSortedArrays