/**
 * @param {character[]} letters
 * @param {character} target
 * @return {character}
 */
var nextGreatestLetter = function(letters, target) {
  let ans = 0;
  let [l, r] = [0, letters.length - 1];

  while (l <= r) {
    const m = Math.floor((l + r) / 2);
    if (letters[m] > target) {
      ans = m;
      r = m - 1;
    } else {
      l = m + 1;
    }
  }

  return letters[ans];
};