class Solution(object):
    def twoSum(self, nums, target):
        dic = {}
        for a, b in enumerate(nums):
            t = target - b
            if t in dic:
                return [dic[t], a]
            else:
                dic[b] = a






