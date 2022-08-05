class Solution(object):
    def kidsWithCandies(self, candies, extraCandies):
        arr = []
        for i in candies:
            if (i+extraCandies) >= max(candies):
                arr.append(True)
            else:
                arr.append(False)
        return arr