func findPeakElement(nums []int) int {
	l, r := 0, len(nums)-1
	for l < r-1 {
		mid := (l + r) / 2
		if nums[mid] > nums[mid+1] && nums[mid] > nums[mid-1] {
			return mid
		} else if nums[mid] < nums[mid+1] {
			l = mid + 1
		} else if nums[mid] > nums[mid+1] {
			r = mid - 1
		}
	}
	if nums[l] > nums[r] {
		return l
	} else {
		return r
	}
}