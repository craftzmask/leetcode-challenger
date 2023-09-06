/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {boolean}
 */

var dfs = function(root) {
  if (!root) return 0;
  const left = dfs(root.left);
  const right = dfs(root.right);
  if (left === -1 || right === -1) return -1;
  if (Math.abs(left - right) > 1) return -1;
  return Math.max(left, right) + 1;
}

var isBalanced = function(root) {
  return dfs(root) !== -1;
};