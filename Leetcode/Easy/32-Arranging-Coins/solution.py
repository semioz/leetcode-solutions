class Solution(object):
    def arrangeCoins(self, n:int) -> int:
        left,right = 0,n
        res = 0
        while left <= right:
            mid = (left+right)//2
            coins = (mid/2)*(mid+1)
            if coins > n:
                right = mid - 1
            else:
                left = mid + 1
                res = max(res,mid)
        return res