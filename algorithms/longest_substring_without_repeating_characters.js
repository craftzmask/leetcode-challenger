/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {
  const count = new Set();

  let longest = l = 0;
  for (let r = 0; r < s.length; r++) {
    while (count.has(s[r])) {
      count.delete(s[l++]);
    }

    count.add(s[r]);
    longest = Math.max(longest, count.size);
  }

  return longest;
};