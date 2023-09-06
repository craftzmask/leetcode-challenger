/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function(s, t) {
  if (t.length !== s.length) return false;

  const counter = Array(26).fill(0);
  for (let i = 0; i < s.length; i++) {
    counter[s.charCodeAt(i) - 'a'.charCodeAt(0)]++;
    counter[t.charCodeAt(i) - 'a'.charCodeAt(0)]--;
  }

  for (let i = 0; i < counter.length; i++) {
    if (counter[i] !== 0) return false;
  }

  return true;
};