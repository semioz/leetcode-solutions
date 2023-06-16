var diameterOfBinaryTree = function(root) {
    let res = [0];
    let dfs = function(root) {
        if (!root) return -1;
        let [left, right] = [dfs(left), dfs(right)];
        res[0] = Math.max(res[0], 2 + left + right);
        return 1 + Math.max(left, right);
    };
    dfs(root);
    return res[0];
};