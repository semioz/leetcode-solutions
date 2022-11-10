function maxSubArrayTs(nums: number[]): number {
    let maxCurrent:number = nums[0],maxGlobal:number = nums[0];
    for(let i:number =0;i<nums.length;i++){
        maxCurrent = Math.max(nums[i],nums[i]+maxCurrent);
        if(maxCurrent>maxGlobal)maxGlobal = maxCurrent;
    }
    return maxGlobal;
}