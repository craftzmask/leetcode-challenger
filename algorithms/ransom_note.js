/**
 * @param {string} ransomNote
 * @param {string} magazine
 * @return {boolean}
 */
var canConstruct = function(ransomNote, magazine) {
  if (ransomNote.length > magazine.length) return false;

  const checker = Array(26).fill(0);
  for (let i = 0; i < magazine.length; i++) {
    checker[magazine.charCodeAt(i) - 'a'.charCodeAt(0)]++;
    checker[ransomNote.charCodeAt(i) - 'a'.charCodeAt(0)]--;
  }

  for (let i = 0; i < 26; i++) {
    if (checker[i] < 0) return false;
  }

  return true;
};