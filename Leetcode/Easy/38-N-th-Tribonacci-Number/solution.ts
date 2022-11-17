function tribonacciTs(n: number): number {
    let cache = {};
    let fast = (x:number) => {
        if(cache[x])return cache[x];
        if(x < 2)return x;
        if(x == 2)return 1;
        return cache[x] = fast(x-1) + fast(x-2) + fast(x-3);
    } 
    return fast(n)
};