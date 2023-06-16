function sortedSquaress(nums: number[]): number[] {
    let [left,right] = [0,nums.length-1];
    let res:number[] = [];
    while(left <= right){
        if(nums[left]*nums[left] > nums[right]*nums[right]){
            res.push(nums[left]*nums[left]);
            left++;
        }else{
            res.push(nums[right]*nums[right]);
            right--;
        }
    }
    return res.reverse();
};