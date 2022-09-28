/**
 * @param {number[]} nums
 * @return {number}
 */
var arraySign = function(nums) {
    let a = 1;
    for (let i of nums) {
        if (i === 0) return 0;
        if (i < 0) a *= -1;
    }
    return a
};