/**
 * @param {string} s
 * @return {boolean}
 */

function isAlpha(c) {
  c = c.toLowerCase().charCodeAt(0);
  return (48 <= c && c <= 57) || (97 <= c && c <= 122);
}

var isPalindrome = function(s) {
    let [l, r] = [0, s.length - 1];
    while (l <= r) {
        if (!isAlpha(s[l])) l++;
        else if (!isAlpha(s[r])) r--;
        else if (s[l].toLowerCase() !== s[r].toLowerCase()) return false;
        else {
          l++;
          r--;
        }
    }
    return true;
};