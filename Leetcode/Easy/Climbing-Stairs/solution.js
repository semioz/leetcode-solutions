var climbStairs = function(n) {
    let cache = {};
    let memoization = (x) => {
        if (x <= 2) return x
        if (cache[x]) return cache[x];
        return cache[x] = memoization(x - 1) + memoization(x - 2) + 1;
    }
    return memoization(n)
};