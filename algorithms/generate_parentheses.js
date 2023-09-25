/**
 * @param {number} n
 * @return {string[]}
 */

var generateParenthesis = function(n) {
  const res = []
  const path = []

  function dfs(i, opens, closes) {
      if (i === n) {
          res.push(path.join(''))
          return
      }

      if (opens < n) {
          path.push('(')
          dfs(i, opens + 1, closes)
          path.pop()
      }

      if (closes < opens) {
          path.push(')')
          dfs(i + 1, opens, closes + 1)
          path.pop()
      }
  }

  dfs(0, 0, 0)
  return res
};