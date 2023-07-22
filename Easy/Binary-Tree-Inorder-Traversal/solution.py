#Inorder traversal is to traverse the left subtree first. Then visit the root. Finally, traverse the right subtree.
#Left -> Root -> Right
#It is type of DFS

#Recursive Solution
class Solution(object):
    def inorderTraversal(self, root):
        res = []
        def inorder(root):
            if not root:
                return
            inorder(root.left)
            res.append(root.val)
            inorder(root.right)
        inorder(root)
        return res       

#Iterative Solution
class Solution(object):
    def inorderTraversal(self, root):
        res,stack = [],[]
        cur = root
        while cur or stack:
            while cur:
                stack.append(cur)
                cur = cur.left
            cur = stack.pop()
            res.append(cur.val)
            cur = cur.right
        return res
