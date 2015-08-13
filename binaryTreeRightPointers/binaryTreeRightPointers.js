/**
 * Definition for binary tree with next pointer.
 * function TreeLinkNode(val) {
 *     this.val = val;
 *     this.left = this.right = this.next = null;
 * }
 */

/**
 * @param {TreeLinkNode} root
 * @return {void} Do not return anything, modify tree in-place instead.
 */
var connect = function(root) {
  var link = function(node) {
    if (node.left !== null) {
      node.left.next = node.right;
      if (node.next !== null) node.right.next = node.next.left;
    }
    if (node.next !== null) link(node.next);
  }
  var current = root;
  while (current !== null) {
    link(current);
    current = current.left;
  }
};