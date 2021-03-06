/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[]}
 */
var preorderTraversal = function(root) {
  var stack = [];
  var result = [];
  var current = root;
  if (current !== null) stack.push(current);
  while (stack.length > 0) {
    current = stack.pop();
    result.push(current.val);
    if (current.right !== null) stack.push(current.right);
    if (current.left !== null) stack.push(current.left);
  }
  return result;
};