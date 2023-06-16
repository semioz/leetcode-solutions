function myPoww(x: number, n: number): number {
    if(n == 0)return 1;
    if(n < 0)return 1/myPoww(x,-n);
    let temp:number = 1;
    while(n){
        if(1 & n)temp *= x;
        x *= x;
        n = Math.floor(n/2);
    }
    return temp;
};
