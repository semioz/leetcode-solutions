function maxProfitTs(prices: number[]): number {
    let [left, maxProfit]:number[] = [0,0];
    let right = 1;
    while(right <= prices.length){
        let currentProf = prices[right] - prices[left];
        if(prices[left] < prices[right])maxProfit = Math.max(maxProfit,currentProf);
        else{
            left = right;
        }
        right++;
    }
    return maxProfit
};