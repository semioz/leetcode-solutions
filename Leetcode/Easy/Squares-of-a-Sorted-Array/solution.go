func sortedSquares(nums []int) []int {
	res := make([]int, len(nums))
	left, right, i := 0, len(nums)-1, len(nums)-1
	for left <= right {
		if nums[left]*nums[left] > nums[right]*nums[right] {
			res[i] = nums[left] * nums[left]
			left++
		} else {
			res[i] = nums[right] * nums[right]
			right--
		}
		i--
	}
	return res
}