let arrangeCoins = function(n) {
    let left = res = 0;
    let right = n;
    while (left <= right) {
        let mid = Math.round((left + right) / 2);
        let coins = (mid / 2) * (mid + 1);
        if (coins > n) right = mid - 1;
        else {
            left = mid + 1;
            res = Math.max(res, mid)
        }
    }
    return res;
}