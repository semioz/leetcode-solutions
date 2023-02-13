//HashMap
const twoSum = (nums, target) => {
    let prevMap = {}
    for (let [index, num] of nums.entries()) {
        if (prevMap[num] !== undefined) return [prevMap[num], index]
        prevMap[target - num] = index;
    }
};

//Brute Force
const bruteSum = (nums, target) => {
    for (let i = 0; i < nums.length; i++) {
        for (let j = i + 1; j < nums.length; j++) {
            if (nums[i] + nums[j] == target) return [i, j]
        }
    }
}