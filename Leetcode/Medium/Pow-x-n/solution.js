let myPow = function(x, n) {
    if (!n) return 1;
    if (n < 0) return 1 / myPow(x, -n);
    let temp = 1;
    while (n) {
        if (1 & n) temp *= x;
        x *= x;
        n = Math.floor(n / 2);
    }
    return temp;
};
