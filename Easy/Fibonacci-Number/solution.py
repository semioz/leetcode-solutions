def fibo(n):
    cache = {}
    def fast(x):
        if x in cache:
            return cache[x]
        if x < 2:
            return x
        cache[x] = fast(x-1)+fast(x-2)
        return cache[x]
    return fast(n)
    