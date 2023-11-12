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
export function sumFrom50_Before100(){
    let summa = 50;
    for (let i = 50;i<101;i++){
        summa += i
        console.log(i)
    }
    return summa;
}
