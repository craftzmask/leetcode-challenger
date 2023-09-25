/**
 * @param {string} digits
 * @return {string[]}
 */
const phone = {
  2: "abc",
  3: "def",
  4: "ghi",
  5: "jkl",
  6: "mno",
  7: "pqrs",
  8: "tuv",
  9: "wxyz"
}

var dfs = function(digits, path, res) {
  if (path.length === digits.length) {
      if (path.length) {
          res.push(path.join(''))
      }
      return
  }

  const letters = phone[digits[path.length]]
  for (const letter of letters) {
      path.push(letter)
      dfs(digits, path, res)
      path.pop()
  }
}

var letterCombinations = function(digits) {
  const res = []
  dfs(digits, [], res)
  return res
};