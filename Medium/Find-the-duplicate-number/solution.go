func findDuplicate(nums []int) int {
	s, f := 0, 0
	for {
		s = nums[s]
		f = nums[nums[f]]
		if s == f {
			break
		}
	}
	s2 := 0
	for {
		s = nums[s]
		s2 = nums[s2]
		if s == s2 {
			return s
		}
	}
}