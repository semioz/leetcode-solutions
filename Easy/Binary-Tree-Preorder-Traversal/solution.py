# DFS - Node, Left, Right

class Solution(object):
    def preorderTraversal(self, root):
        stack, res = [],[]
        cur = root

        while cur or stack:
            if cur:
                res.append(cur.val)
                stack.append(cur.right)
                cur = cur.left
            else:
                cur = stack.pop()
        return res

