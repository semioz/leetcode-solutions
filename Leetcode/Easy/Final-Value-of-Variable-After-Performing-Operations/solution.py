class Solution(object):
    def finalValueAfterOperations(self, operations):
        return sum("++" in s or -1 for s in operations)