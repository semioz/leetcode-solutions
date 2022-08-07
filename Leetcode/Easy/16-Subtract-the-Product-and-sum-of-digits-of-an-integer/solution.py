import math
class Solution:
    def subtractProductAndSum(self, n: int) -> int:
        multiple = math.prod(map(int,str(n)))
        sum_ = sum(map(int,str(n)))
        return multiple - sum_