function averageAllOddNum(n){
    let quanOddNum = 0;
    let sumQuanOddNum = 0;
    for (let i = 1;i<n+1;i++){
        if (i%2 === 0){
            quanOddNum++;
            sumQuanOddNum += i;
        }
    }
    return sumQuanOddNum/quanOddNum;
}
console.log(averageAllOddNum(10))