/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {TreeNode}
 */
var invertTree = function(root) {
  var hold = root.left;
  root.left = root.right;
  root.right = hold;
  if (root.right !== null) invertTree(root.right);
  if (root.left !== null) invertTree(root.left);
  return root;
};