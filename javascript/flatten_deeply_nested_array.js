/**
 * @param {any[]} arr
 * @param {number} depth
 * @return {any[]}
 */
var flat = function (arr, n) {
  if (n === 0) return arr;

  const ans = [];
  for (const a of arr) {
    if (Array.isArray(a)) {
      ans.push(...flat(a, n - 1));
    } else {
      ans.push(a);
    }
  }

  return ans;
};