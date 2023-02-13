class Solution(object):
    def isValid(self, s):
        p = {"(":")","[":"]","{":"}"}
        stack = []
        for i in s:
            if i in p:
                stack.append(i)
            elif len(stack) == 0 or p[stack.pop()] != i:
                return False
            return len(stack) == 0
            