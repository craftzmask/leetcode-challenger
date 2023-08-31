/**
 * @param {number} n
 * @return {number}
 */
var climbStairs = function(n) {
  const cache = {};

  const countSteps = function(step) {
    if (step <= 2) return step;
    if (cache[step]) return cache[step];
    cache[step] = countSteps(step - 1) + countSteps(step - 2);
    return cache[step];
  }
  
  return countSteps(n);
};