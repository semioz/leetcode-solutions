//HashMap
func twoSum(nums []int, target int) []int {
	prevMap := make(map[int]int)
	for i, num := range nums {
		if prevIndex, exists := prevMap[num]; exists {
			return []int{prevIndex, i}
		}
		prevMap[target-num] = i
	}
	return nil
}

// Brute Force
func twoSum(nums []int, target int) []int {
	for i := 0; i < len(nums); i++ {
		for j := i + 1; j < len(nums); j++ {
			if nums[i]+nums[j] == target {
				return []int{i, j}
			}
		}
	}
	return []int{}
}