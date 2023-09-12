/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var searchRange = function(nums, target) {
  // Finding the first position or leftmost
  let [l, r, starting] = [0, nums.length - 1, -1];
  while (l <= r) {
    const m  = Math.floor((r + l) / 2);
    if (nums[m] === target) {
      starting = m;
      r = m - 1;
    } else if (nums[m] > target) {
      r = m - 1;
    } else {
      l = m + 1;
    }
  }    

  // Finding the last position or rightmost
  [l, r, ending] = [0, nums.length - 1, -1];
  while (l <= r) {
    const m = Math.floor((r + l) / 2);
    if (nums[m] === target) {
      ending = m;
      l = m + 1;
    } else if (nums[m] > target) {
      r = m - 1;
    } else {
      l = m + 1;
    }
  }

  return [starting, ending];
};