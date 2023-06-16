var isSymmetric = function(root) {
    let dfs = (left, right) => {
        if (!left && !right) return true;
        if (!left || !right) return false;
        return (left.val == right.val && dfs(left.left, right.right) && dfs(left.right, right.left));
    }
    return dfs(root.left, root.right);
};