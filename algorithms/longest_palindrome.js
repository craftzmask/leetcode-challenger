/**
 * @param {string} s
 * @return {number}
 */
var longestPalindrome = function(s) {
  const count = Array(52).fill(0);

  for (const c of s) {
    if (c === c.toLowerCase()) {
      count[c.charCodeAt(0) - 'a'.charCodeAt(0)]++;
    } else {
      count[c.charCodeAt(0) - 'A'.charCodeAt(0) + 26]++;
    }
  }

  let total = 0;
  for (const val of count) total += Math.floor(val / 2) * 2;
  return count.some(val => val % 2 === 1) ? total + 1 : total;
};