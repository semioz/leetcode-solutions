/**
 * @param {number[]} height
 * @return {number}
 */
var maxArea = function(height) {
    let [l, r] = [0, height.length];
    let res = 0;
    while (l < r) {
        let area = (r - l) * Math.min(height[l], height[r]);
        res = Math.max(res, area);

        if (height[l] < height[r]) {
            l += 1
        } else {
            r -= 1
        }
    }
    return res
};