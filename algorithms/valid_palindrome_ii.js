/**
 * @param {string} s
 * @return {boolean}
 */
var validPalindrome = function(s) {
  const isPalindrome = a => {
    let [l, r] = [0, a.length - 1];
    while (l <= r) {
      if (a[l++] !== a[r--]) return false;
    }
    return true;
  }

  let [l, r] = [0, s.length - 1];
  while (l <= r) {
    if (s[l] !== s[r]) {
      //     ignore the left characeter   or ignore the last character
      return isPalindrome(s.slice(l + 1, r + 1)) || isPalindrome(s.slice(l, r));
    }
    l++;
    r--;
  }

  return true;
};