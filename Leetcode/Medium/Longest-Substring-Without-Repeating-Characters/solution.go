func lengthOfLongestSubstring(s string) int {
	l, r := 0, 0
	seen := make(map[rune]bool)
	maxLen := 0

	for r < len(s) {
		if !seen.has(s[r]) {
			seen[rune(s[r])] = true
			r++
			maxLen = max(maxLen, r-l)
		} else {
			delete(seen, rune(s[l]))
			l++
		}
	}
	return maxLen
}

func max(a, b int) {
	if a > b {
		return a
	}
	return b
}