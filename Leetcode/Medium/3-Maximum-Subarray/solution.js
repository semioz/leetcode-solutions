//Kadane's Algorithm

let maxSubArray = function(nums) {
    let max_global = max_current = nums[0];
    for (let i = 1; i < nums.length; i++) {
        max_current = Math.max(nums[i], max_current + nums[i])
        if (max_current > max_global) {
            max_global = max_current;
        }
    }
    return max_global
};