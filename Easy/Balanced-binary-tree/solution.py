class Solution(object):
    def isBalanced(self, root):
        def checkBalanced(root):
            if not root:
                return True,0
            
            left_balanced, left_height = checkBalanced(root.left)
            right_balanced, right_height = checkBalanced(root.right)

            if not left_balanced or not right_balanced:
                return False, max(left_height,right_height) + 1
            if abs(left_height-right_height) > 1:
                return False, max(left_height,right_height) + 1
            return True, max(left_height,right_height) + 1
        return checkBalanced(root)[0]

# Less line of code
class Solution(object):
    def isBalanced(self, root):
        def dfs(root):
            if not root:
                return [True,0]
            left, right = dfs(root.left), dfs(root.right)
            balanced = left[0] and right[0] and abs(left[1] - right[1]) <= 1
            return [balanced, 1+ max(left[1], right[1])]
        return dfs(root)[0]
