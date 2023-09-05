/**
 * @param {number[]} numbers
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(numbers, target) {
  let [l, r] = [0, numbers.length - 1];
  while (l < r) {
    const total = numbers[l] + numbers[r];
    if (total === target) return [++l, ++r];
    else if (total > target) r--;
    else l++;
  }
  return [];
};