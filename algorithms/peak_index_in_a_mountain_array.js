/**
 * @param {number[]} arr
 * @return {number}
 */
var peakIndexInMountainArray = function(arr) {
  let ans = -1;
  let [l, r] = [0, arr.length - 1];

  while (l <= r) {
    const m = Math.floor((l + r) / 2);
    if (m + 1 < arr.length && arr[m] > arr[m + 1]) {
      ans = m;
      r = m - 1;
    } else {
      l = m + 1;
    }
  }

  return ans;
};