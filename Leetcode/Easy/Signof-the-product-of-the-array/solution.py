class Solution(object):
    def arraySign(self, nums):
        a = 0
        for i in nums:
            if i == 0: return 0
            if i < 0: a *= -1
        return a