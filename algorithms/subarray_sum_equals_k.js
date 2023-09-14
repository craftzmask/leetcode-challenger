/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var subarraySum = function(nums, k) {
  let map = new Map();
  map.set(0, 1) // The empty array has the sum of zero

  let sum = count = 0;
  for (const num of nums) {
    // Update sum
    sum += num;

    // Count the number of subarrays that sum to k if found
    const complement = sum - k;
    if (map.has(complement)) {
      count += map.get(complement);
    }

    // Count every sum has found so far
    if (map.has(sum)) {
      map.set(sum, map.get(sum) + 1);
    } else {
      map.set(sum, 1);
    }
  }

  return count;
};