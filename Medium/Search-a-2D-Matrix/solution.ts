function searchMatrixTs(matrix: number[][], target: number): boolean {
    let rows:number = matrix.length, cols:number = matrix[0].length;
    let top:number = 0, bot:number = rows-1;
    while(top <= bot){
        let mid:number = Math.round((top+bot)/2);
        if (target > matrix[mid][cols-1])top = mid +1;
        else if(target < matrix[mid][0])bot = mid -1;
        else break
    }
    if(!(top <= bot))return false
    let mid:number = Math.round((top+bot)/2);
    let l:number = 0, r:number = cols-1
    while(l <= r){
        let midNew:number = Math.round((l+r)/2);
        if(target > matrix[mid][midNew])l = midNew +1;
        else if(target < matrix[mid][midNew])r = midNew-1;
        else return true
    }
    return false
}