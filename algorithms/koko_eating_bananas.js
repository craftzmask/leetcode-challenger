/**
 * @param {number[]} piles
 * @param {number} h
 * @return {number}
 */

var canFinish = function(piles, h, k) {
  let totalHours = 0;
  for (const p of piles) {
    totalHours += Math.ceil(p / k);
  }
  return totalHours <= h; 
}

var minEatingSpeed = function(piles, h) {
  let ans = -1;

  let [l, r] = [1, 10**9];
  while (l <= r) {
    const m = Math.floor((l + r) / 2);

    if (canFinish(piles, h, m)) {
      ans = m;
      r = m - 1;
    } else {
      l = m + 1;
    }
  }

  return ans;
};