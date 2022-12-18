#Binary Search
def mySqrt(x):
    if x == 0:
        return 0
    l,r = 1,x
    while l <= r:
        mid = (l+r)//2
        if mid > x/mid:
            r = mid - 1
        else:
            if mid+1 > x/(mid+1):
                return mid
            l = mid + 1