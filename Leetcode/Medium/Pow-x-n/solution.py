class Solution(object):
    def myPow(self, x, n):
        if not n:
            return 1
        if n < 0:
            return 1/self.myPow(x,-n)
        temp = 1
        while n:
            if n & 1:
                temp *= x
            x*=x
            n//=2
        return temp