class Solution(object):
    def duplicateZeros(self, arr):
        i = 0
        while i < len(arr)-1:
            if arr[i] == 0:
                arr.insert(i+1,0)
                del arr[-1]
                i += 2
            else:
                i += 1