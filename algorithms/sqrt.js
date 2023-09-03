/**
 * @param {number} x
 * @return {number}
 */
var mySqrt = function(x) {
  let ans = 0;
  let [l, r] = [1, x];
  
  while (l <= r) {
    const m = Math.floor((l + r) / 2);
    if (m ** 2 <= x) {
      ans = m;
      l = m + 1;
    } else {
      r = m - 1;
    }
  }

  return ans;
};