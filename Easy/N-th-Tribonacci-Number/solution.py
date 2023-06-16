class Solution:
    def tribonacci(self, n: int) -> int:
        cache = {}
        def fast(x):
            if cache.get(x):return cache.get(x)
            if x < 2:return x
            if x == 2:return 1
            cache[x] = fast(x-3) + fast(x-2) + fast(x-1)
            return cache[x]
        return fast(n)
            