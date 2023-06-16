//Bubble Sort Algorithm

function sortArray(nums: number[]): number[] {
    const { length } = nums;
    for (let i=0;i< length; i++){
        for(let j=0;j< length-i-1; j++){
            if(nums[j]>nums[j+1]){
                let temp = nums[j];
                nums[j] = nums[j+1];
                nums[j+1] = temp
            }
        }
    }
    return nums
};

// ()sort Method
function sortArray1(nums: number[]): number[] {
    nums.sort((a:number,b:number) => {
        return a - b
    })
    return nums
}

//Merge Sort Algorithm
function merge(left:number[], right:number[]){
    const results:number[] = [];

    while(left.length && right.length){
        if(left[0] < right[0]){
            results.push(left.shift());
        }else{
            results.push(right.shift());
        }
    }
    return [...results,...left,...right];
}

function mergeSort(arr:number[]){
    if(arr.length === 1){
        return arr;
    }
    const center = Math.floor(arr.length / 2);
    const left = arr.slice(0,center);
    const right = arr.slice(center);

    return merge(mergeSort(left),mergeSort(right));
}