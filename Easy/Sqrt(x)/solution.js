let mySqrt = function(x) {
    if (x == 0) return 0;
    let [l, r] = [1, x];
    while (l <= r) {
        let mid = Math.floor((l + r) / 2);
        if (mid > x / mid) r = mid--;
        else {
            if (mid + 1 > x / (mid + 1)) return mid;
            l = mid++;
        }
    }
}