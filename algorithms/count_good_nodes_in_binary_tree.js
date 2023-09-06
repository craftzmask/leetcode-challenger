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
 * @return {number}
 */

var dfs = function(root, max) {
  if (!root) return 0;
  const left = dfs(root.left, Math.max(root.val, max));
  const right = dfs(root.right, Math.max(root.val, max));
  const total = left + right;
  return root.val >= max ? 1 + total : total;
}

var goodNodes = function(root) {
  return dfs(root, Number.NEGATIVE_INFINITY);
};