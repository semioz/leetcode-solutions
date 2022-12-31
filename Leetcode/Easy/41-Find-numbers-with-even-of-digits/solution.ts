function findNumbers(nums: number[]): number {
    let count = 0;
    for(let i of nums){
        if(i.toString().length % 2 == 0)count++;
    }
    return count;
}