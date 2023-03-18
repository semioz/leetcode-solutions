func maxSubArray(nums []int) int {
	maxGlobal, maxCurr := nums[0], nums[0]
	for i := 1; i < len(nums); i++ {
		maxCurr = max(nums[i], num[i]+maxCurr)
		if maxCurr > maxGlobal {
			maxGlobal = maxCurr
		}
	}
	return maxGlobal
}

func max(a, b int) int {
	if a > b {
		return a
	}
	return b
}
