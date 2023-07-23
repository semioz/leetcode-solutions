//LEFT ROOT RIGHTs

function inorderTraversal(root: TreeNode | null): number[] {
    let result: number[] = [];
    let stack: TreeNode[] = [];
    let cur = root;
    
    while (cur || stack.length > 0) {
        while (cur) {
            stack.push(cur);
            cur = cur.left;
        }
        cur = stack.pop();
        result.push(cur.val);
        cur = cur.right;                       
    }
    return result;
};