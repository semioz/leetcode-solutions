class Solution(object):
    def sumOfUnique(self, nums):
        return sum(i for i in nums if nums.count(i) == 1)