# Definition for a binary tree node.
# class TreeNode(object):
#     def __init__(self, val=0, left=None, right=None):
#         self.val = val
#         self.left = left
#         self.right = right
class Solution(object):
    def rightSideView(self, root):
        q = deque()
        view = []
        if not root:
            return view
        q.append(root)

        while q:
            size = len(q)
            for i in range(size):
                node = q.popleft()
                if i == size -1:
                    view.append(node.val)
                if node.left:
                    q.append(node.left)
                if node.right:
                    q.append(node.right)
        return view