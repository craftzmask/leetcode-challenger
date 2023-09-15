/**
 * @param {string} s
 * @return {string}
 */
var reverseVowels = function(s) {
  s = s.split('');
  const vowels = ['a', 'e', 'i', 'o', 'u'];

  let [l, r] = [0, s.length - 1];
  while (l < r) {
    if (!vowels.includes(s[l].toLowerCase())) {
      l++;
    } else if (!vowels.includes(s[r].toLowerCase())) {
      r--;
    } else {
      [s[l], s[r]] = [s[r], s[l]];
      l++;
      r--;
    }
  }

  return s.join('');
};