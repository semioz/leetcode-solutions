function finalValueAfterOperations(operations: string[]): number {
    let num:number = 0;
    for (let i of operations){
        if(i.startsWith("+") || i.endsWith("+")) num++
        else num--;
    }
    return num;
};