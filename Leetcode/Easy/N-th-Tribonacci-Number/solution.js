var tribonacci = function(n) {
    let cache  = {};
    let tri = (x) => {
        if (cache[x]) return cache[x];
        if (x < 2) return x;
        if (x == 2) return 1;
        return cache[x] = tri(x - 1) + tri(x - 2) + tri(x - 3)
    }
    return tri(n);
}