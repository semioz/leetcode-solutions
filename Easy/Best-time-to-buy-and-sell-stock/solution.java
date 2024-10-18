class Solution {
    public int maxProfit(int[] prices) {
        int left = 0, maxProfit = 0;
        int right = 1;
        while (right < prices.length) {
            int currProfit = prices[right] - prices[left];
            if (prices[left] < prices[right]) {
                maxProfit = Math.max(currProfit, maxProfit);
            } else {
                left = right;
            }
            right++;
        }
        return maxProfit;
    }
}