class Solution(object):
    def maxProfit(self, prices):
        maxProf = 0
        buy = 0
        sell = 1
        while sell < len(prices):
            curProfit = prices[sell] - prices[buy]
            if prices[buy] < prices[sell]:
                maxProf = max(curProfit,maxProf)
            else:
                buy = sell
            sell += 1
        return maxProf