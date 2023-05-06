func maxArea(height []int) int {
	l, r := 0, len(height)
	res := 0
	for l < r {
		area := (r - l) * min(height[r], height[l])
		res = max(area, res)
		if height[r] < height[l] {
			l++
		}else {
			r--
		}
	}
	return res
}

func max(a, b int) int {
	if a > b {
		return a
	}
	return b
}

func min(a, b int) int {
	if a < b {
		return a
	}
	return b
}
