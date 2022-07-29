const twoSum = (nums, target) => {
    store = {}
    for (let [index, num] of nums.entries()) {
        if (store[num] !== undefined) return [store[num], index]
        store[target - num] = index;
    }
};