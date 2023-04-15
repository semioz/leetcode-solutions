#Brute Force
class Solution(object):
    def maxArea(self, height):
        res = 0 
        for l in range(len(height)):
            for r in range(l+1,len(height)):
                area = (r-l) * min(height[r],min[l])
                res = max(res,area)
        return res

#Optimal Solution O(n) - Two Pointer
class Solution(object):
    def maxArea(self, height):
        l,r = 0,len(height)
        res = 0
        while l < r:
            area = (l-r) * min(height[l]*height[r])
            res = max(res,area)
            if height[l] < height[r]:
                l += 1
            else:
                r -= 1
        return res




