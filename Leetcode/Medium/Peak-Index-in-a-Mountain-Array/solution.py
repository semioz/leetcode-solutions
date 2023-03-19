class Solution(object):
    def peakIndexInMountainArray(self, arr):
        l,r = 0,len(arr)-1
        while l<=r:
            mid = (l+r)//2
            if arr[mid] == arr[mid+1]:
                return mid
            elif arr[mid] < arr[mid+1]:
                l = mid+1
            elif arr[mid] > arr[mid+1]:
                r = mid-1
        return l