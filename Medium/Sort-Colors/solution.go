func sortColors(nums []int) {
	left, i, right := 0, 0, len(nums)-1
	func swap(a,b) {
		temp:=nums[a]
		nums[a] = nums[b]
		nums[b] = temp
	}
	for i <= right {
		if nums[i] == 0 {
			swap(left,i)
			left++
		}else if nums[i] == 2 {
			swap(i,right)
			right--
			i--
		} 
	}
	i++
}

func sortColor(nums []int) {
}
