class Solution(object):
    def levelOrder(self, root):
        finale = []
        q = deque()
        if root:
            q.append(root)

        while q:
            val = []
            for i in range(len(q)):
                node = q.popleft()
                val.append(node.val)
                if node.left:
                    q.append(node.left)
                if node.right:
                    q.append(node.right)
            finale.append(val)
        return finale