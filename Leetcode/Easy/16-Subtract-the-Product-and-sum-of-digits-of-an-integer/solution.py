import numpy
class Solution(object):
    def subtractProductAndSum(self, n):
        new = map(int, str(n))
        return  numpy.prod(new) - sum(new)