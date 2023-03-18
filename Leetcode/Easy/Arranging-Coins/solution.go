//Brute Force
func arrangeCoins(n int) int {
	row := 0
	for i := 1; i <= n; i++ {
		n -= i
		if n >= 0 {
			row++
		}
	}
	return row
}

// O(log n)
func arrangeCoins(n int) int {
	l, r := 1, n
	res := 0
	for l <= r {
		mid := (l + r) / 2
		coin = (mid * (mid + 1)) / 2
		if coin > n {
			r = mid - 1
		} else {
			l = mid + 1
			res = max(mid, res)
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