let search = function(nums, target) {
    let [l, r] = [0, nums.length - 1];

    while (l <= r) {
        let mid = Math.floor((l + r) / 2);
        if (nums[mid] == target) {
            return mid;
        }
        if (nums[l] <= nums[mid]) { //left side is sorted
            if (target > nums[mid] || target < nums[l]) { // that means target is in right side [1,2,3,4,5,6,7] or [4,5,6,7,1,2,3]
                l = mid + 1;
            } else { // [1,2,3,4,5,6,7]
                r = mid - 1;
            }
        } else { //right side is sorted [4,5,6,7,1,2,3]
            if (target < nums[mid] || target > nums[r]) {
                r = mid - 1;
            } else {
                l = mid + 1;
            }
        }
    }
    return -1;
};