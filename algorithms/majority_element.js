/**
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function(nums) {
  let count = 1;
  let ans = nums[0];

  for (let i = 1; i < nums.length; i++) {
    if (count === 0) ans = nums[i];
    ans === nums[i] ? count++ : count--;
  }

  return ans;
};