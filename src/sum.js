export function sumNum(num){
    return num.split('').map((el)=>Number(el)).reduce((el,sum)=>sum+=el)
}
export function maxNum(a,b){
    return Math.max(a,b);
}
export function returnMounth(num){
    const date = new Date(`2022-${num}-15`);
    const monthName = date.toLocaleString('default', { month: 'long' });
    return monthName;
}
