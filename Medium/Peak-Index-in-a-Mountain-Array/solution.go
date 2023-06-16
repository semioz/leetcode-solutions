func peakIndexInMountainArray(arr []int) int {
	l, r := 0, len(arr)-1
	for l <= r {
		mid := (l + r) / 2
		if arr[mid] == arr[mid+1] {
			return mid
		}
		else if arr[mid] < arr[mid+1]{
			l = mid+1
		}
		else if arr[mid] > arr[mid+1]{
			r = mid-1
		}
	}
	return l
}