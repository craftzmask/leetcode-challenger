/**
 * @param {number[]} nums
 * @return {number}
 */
var findMin = function(nums) {
  let ans = -1;
  let [l, r] = [0, nums.length - 1];

  while (l <= r) {
    const m = Math.floor((l + r) / 2);
    if (nums[m] <= nums[nums.length - 1]) {
      ans = m;
      r = m - 1;
    } else {
      l = m + 1;
    }
  }

  return nums[ans];
};