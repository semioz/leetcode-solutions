/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
var isValidBST = function(root) {
    let valid = function(node, left, right) {
        if (!node) return true;
        if (!(node.val > left && node.val < right)) return false;
        return (valid(node.left, left, node.val) && valid(node.right, node.val, right));
    }
    return valid(root, Number.NEGATIVE_INFINITY, Number.POSITIVE_INFINITY);
};