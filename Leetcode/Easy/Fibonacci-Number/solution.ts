function fibTs(n: number): number {
    let cache = {};
    let fast = (x) => {
        if(cache[x])return cache[x]
        if (x < 2)return x;
        return cache[x] = fast(x-1) + fast(x-2);
    }
    return fast(n)
};