var isSubtree = function(root, subRoot) {
    if (root == null && subRoot == null) return true;
    if (root == null || subRoot == null) return false;
    if (isSameTree(root, subRoot)) return true;

    return isSubtree(root.left, subRoot) || isSubtree(root.right, subRoot);
};

var isSameTree = function(root, subRoot) {
    if (root == null && subRoot == null) return true;
    if (root == null || subRoot == null || root.val != subRoot.val) return false;

    return isSameTree(root.left, subRoot.left) && isSameTree(root.right, subRoot.right);
}