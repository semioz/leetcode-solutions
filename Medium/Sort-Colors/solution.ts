function sortColorsTs(nums: number[]): void {
    let [left,i,right]:number[] = [0,0,nums.length-1];
    while(i<=right){
    function swap(i,j){
        let tmp = nums[i];
        nums[i] = nums[j];
        nums[j] = tmp;
        }
        if(nums[i] == 0){
            swap(left,i);
            left++;
        }else if(nums[i] == 2){
            swap(i,right);
            right--;
            i--;
        }
        i++;
    }
}