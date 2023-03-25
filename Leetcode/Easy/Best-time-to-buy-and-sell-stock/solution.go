func maxProfit(prices []int) int {
	left, maxProfit := 0, 0
	right := 1
	for right < len(prices) {
		currProfit := prices[right] - prices[left]
		if prices[right] < prices[left] {
			maxProfit := max(currProfit, maxProfit)
		} else {
			left = right
		}
		right++
	}
	return maxProfit
}

func max(a, b int) int {
	if a > b {
		return a
	}
	return b
}