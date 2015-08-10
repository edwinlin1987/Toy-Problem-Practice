/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {TreeNode}
 */
var lowestCommonAncestor = function(root, p, q) {
    
    var ancestry = function (root, node) {
        var check = root;
        var list = [];
        while (check !== null && check.val !== node.val) {
            list.push(check);
            if (check.val > node.val) { check = check.left; }
            else {check = check.right;}
        }
        list.push(node);
        return list;
    };
    var phist = ancestry(root, p);
    var qhist = ancestry(root, q);
    for (var i = phist.length-1; i >= 0; i--) {
        for (var j = qhist.length-1; j >=0; j--) {
            if (qhist[j].val === phist[i].val) { return qhist[j].val; }
        }
    }
    return null;
};