var maxProfit = function(prices) {
    let left = maxGlobal = 0;
    let right = 1;
    while (right <= prices.length) {
        let currentProfit = prices[right] - prices[left];
        if (prices[left] < prices[right]) maxGlobal = Math.max(currentProfit, maxGlobal);
        else {
            left = right
        }
        right++;
    }
    return maxGlobal
};