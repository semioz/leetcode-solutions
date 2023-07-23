class Solution(object):
    def postorderTraversal(self, root):
        stack, res = [], []
        cur = root
        last_visited = None  # To keep track of the last visited node

        while cur or stack:
            while cur:
                stack.append(cur)
                cur = cur.left

            # Check the right child of the node at the top of the stack
            peek_node = stack[-1]
            if peek_node.right and last_visited != peek_node.right:
                cur = peek_node.right
            else:
                # If the right child is not there or has been visited,
                # add the node value to the result and set last_visited
                # to the current node
                res.append(peek_node.val)
                last_visited = stack.pop()

        return res
