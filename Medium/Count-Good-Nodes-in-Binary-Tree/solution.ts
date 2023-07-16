function goodNodes(root: TreeNode | null): number {
    if (!root) return 0;
    let count = 0;

    const dfs = (node:TreeNode,max:number): void => {
        if (node.val >= max) count++;
        if (node.left) dfs(node.left, Math.max(max,node.val));
        if (node.right) dfs(node.right,Math.max(max,node.val));
    };

    dfs(root,root.val);
    return count;
};