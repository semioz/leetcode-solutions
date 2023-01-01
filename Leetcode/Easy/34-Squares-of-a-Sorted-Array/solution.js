let sortedSquares = function(nums) {
    let left = 0;
    let right = nums.length - 1;
    let res = [];
    while (left <= right) {
        if (nums[left] * nums[left] > nums[right] * nums[right]) {
            res.push(nums[left] * nums[left]);
            left++;
        } else {
            res.push(nums[right] * nums[right]);
            right--;
        }
    }
    return res.reverse();
};