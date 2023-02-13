function climbStairsTs(n: number): number {
    let cache = {}
    let memo = (x) => {
        if(x <= 2)return x;
        if(cache[x])return cache[x];
        return cache[x] = memo(x-1) + memo(x-2);
    }
    return memo(n)
};