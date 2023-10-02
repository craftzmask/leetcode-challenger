/**
 * @param {string} s
 * @param {string} p
 * @return {number[]}
 */
var equals = function(arr1, arr2) {
  return (
    arr1.length === arr2.length && 
    arr1.every((val, i) => val === arr2[i])
  );
}


var findAnagrams = function(s, p) {
  const window = Array(26).fill(0);
  const checker = Array(26).fill(0);

  for (let i = 0; i < p.length; i++) {
    window[s.charCodeAt(i) - 'a'.charCodeAt(0)]++;
    checker[p.charCodeAt(i) - 'a'.charCodeAt(0)]++;
  }

  const ans = [];
  if (equals(window, checker)) {
    ans.push(0);
  }

  for (let i = p.length; i < s.length; i++) {
    window[s.charCodeAt(i - p.length) - 'a'.charCodeAt(0)]--;
    window[s.charCodeAt(i) - 'a'.charCodeAt(0)]++;

    if (equals(window, checker)) {
      ans.push(i - p.length + 1);
    }
  }

  return ans;
};