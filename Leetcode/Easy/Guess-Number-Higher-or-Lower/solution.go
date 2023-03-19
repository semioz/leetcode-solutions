func guessNumber(n int) int {
	l, r := 0, n
	for l <= r {
		mid := (l + r) / 2
		if guess(mid) == 0 {
			return mid
		} else if guess(mid) == 1 {
			l = mid + 1
		} else if guess(mid) == -1 {
			r = mid - 1
		} else {
			return mid
		}
	}
	return 1
}