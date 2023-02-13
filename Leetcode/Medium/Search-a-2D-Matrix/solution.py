class Solution:
    def searchMatrix(self, matrix: List[List[int]], target: int) -> bool:
        rows,cols = len(matrix),len(matrix[0])
        topRow,botRow = 0,rows-1
        while topRow <= botRow:
            mid = (topRow+botRow)//2
            if target > matrix[mid][-1]:
                topRow = mid + 1
            elif target < matrix[mid][0]:
                botRow = mid - 1
            else:
                break
        if not (topRow <= botRow):
            return False
        mid = (topRow+botRow)//2
        l,r = 0,cols-1
        while l<=r:
            mid2 = (l+r)//2
            if target > matrix[mid][mid2]:
                l = mid2 + 1
            elif target < matrix[mid][mid2]:
                r = mid2 - 1
            else:
                return True
        return False