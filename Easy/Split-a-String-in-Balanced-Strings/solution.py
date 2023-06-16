class Solution(object):
    def balancedStringSplit(self, s):
        balance_count,curr_count = 0,0
        for i in s:
            if i == "R":
                curr_count += 1
            else:
                curr_count -= 1
            if curr_count == 0:
                balance_count += 1
            return balance_count
        