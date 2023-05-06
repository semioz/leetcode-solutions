var maxArea = function(height) {
    let [l, r] = [0, height.length - 1];
    let res = 0;
    while (l < r) {
        let area = (r - l) * Math.min(height[r], height[l]);
        res = Math.max(res, area)
        if (height[l] < height[r]) {
            l++;
        } else {
            r--;
        }
    }
    return res;
};