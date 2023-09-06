/**
 * @param {number[]} nums
 * @return {number}
 */

var singleNonDuplicate = function(nums) {
  var toLeft = function(i) {
    if (i === nums.length - 1) {
      return true;
    } else if (i % 2) {
      return nums[i] !== nums[i - 1];
    } else {
      return nums[i] !== nums[i + 1];
    }
  }

  let [l, r]  = [0, nums.length - 1];
  let ans = -1;
  
  while (l <= r) {
    const m = Math.floor((l + r) / 2);
    if (toLeft(m)) {
      ans = m;
      r = m - 1;
    } else {
      l = m + 1;
    }
  }

  return nums[ans];
};