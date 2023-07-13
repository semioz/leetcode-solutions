var levelOrder = function(root) {
    const result = [];
    let queue = [];
    if (root) queue.push(root);

    while (queue.length) {
        let val = [];
        let size = queue.length;
        for (let i = 0; i < size; i++) {
            let node = queue.shift();
            val.push(node.val);
            if (node.left) queue.push(node.left);
            if (node.right) queue.push(node.right);
        }
        result.push(val);
    }
    return result;
};