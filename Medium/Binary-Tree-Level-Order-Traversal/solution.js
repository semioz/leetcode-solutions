var levelOrder = function(root) {
    let finale = [];
    const q = [];
    if (root) q.push(root);

    while (q) {
        let lvl = [];
        let size = q.length;
        for (let i = 0; i < size; i++) {
            let node = q.shift();
            lvl.push(node.val);
            if (node.left) q.push(node.left);
            if (node.right) q.push(node.right);
        }
        finale.push(lvl);
    }
    return finale;
};