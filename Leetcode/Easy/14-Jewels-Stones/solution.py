class Solution(object):
    def numJewelsInStones(self, jewels, stones):
        return sum(s in jewels for s in stones)