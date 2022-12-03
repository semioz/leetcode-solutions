const twoSumTs = (nums: number[], target: number): number[] => {
    const hashMap:Map<number, number> = new Map();
    for(let [i,n] of nums.entries()){
        if(hashMap[n] != undefined)return [hashMap[n],i];
        hashMap[target-n] = i;
    }
};