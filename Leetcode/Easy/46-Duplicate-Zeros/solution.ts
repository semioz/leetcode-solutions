4 function duplicateZeros(arr: number[]): void {
    let i:number = 0;
    while(i < arr.length-1){
        if (arr[i] == 0){
            arr.splice(i+1,0,0);
            arr.pop();
            i += 2
        }else i++;
    }
};
