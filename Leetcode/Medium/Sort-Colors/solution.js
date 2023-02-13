let sortColors = function(nums) {
    let [left, i, right] = [0, 0, nums.length - 1];
    while (i <= right) {
        function swap(i, j) {
            let temp = nums[i];
            nums[i] = nums[j];
            nums[j] = temp;
        }
        if (nums[i] == 0) {
            swap(left, i);
            left++;
        } else if (nums[i] == 2) {
            swap(i, right)
            right--;
            i--;
        }
        i++;
    }
};