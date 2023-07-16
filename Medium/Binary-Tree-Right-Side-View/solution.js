var rightSideView = function(root) {
    let view = [];
    let queue = [];
    if (!root) return view;
    queue.push(root);

    while (queue.length) {
        let size = queue.length;

        for (let i = 0; i < size; i++) {
            let node = queue.shift();
            if (i == size - 1) view.push(node.val);
            if (node.left) queue.push(node.left);
            if (node.right) queue.push(node.right);
        }
    }
    return view;
};