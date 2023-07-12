//DFS
var maxDepth = function(root) {
    if (root == null) return 0;
    return Math.max(maxDepth(root.left), maxDepth(root.right));
};

//DFS
var maxDepth = function(root) {
    let q = [];
    if (root) {
        q.push(root);
    }

    let level = 0;
    while (q.length > 0) {
        const size = q.length;
        for (let i = 0; i < size; i++) {
            const node = q.shift();
            if (node.left) {
                q.push(node.left);
            }
            if (node.right) {
                q.push(node.right);
            }
        }
        level++;
    }
    return level;
};