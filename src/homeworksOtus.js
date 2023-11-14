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
export function multiplicationTableForSeven(){
    const table = [];
    for(let i = 1;i<11;i++){
        table.push(`7 * ${i} = ${7*i}`)
    }
    return table
}
export function averageAllOddNum(n){
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
export function objectUser(ageNum){
    // const ageNum = prompt('enter age');
    const user = {
        age: ageNum,
    }
    const admin = Object.assign({role: 'admin'},user);
    return admin
}
export function makeInteractiveList(div){
    const body = document.body;
    body.append(div)
    const input = document.createElement('input');
    div.append(input);
    const button = document.createElement('button');
    button.innerHTML = 'Add';
    button.hidden = true;
    div.append(button);
    const list = [];
    const listBody = document.createElement('ol');
    div.append(listBody);
    for (let i = 0;i<3;i++){
        list.push(`${i+1}`.repeat(i+1))
    }
    button.addEventListener('click',()=>{
        list.push(input.value);
        input.value = '';
        button.hidden = true;
        if(list.length > 5){
            list.shift();
        }
        listBody.innerHTML = list.map((el)=> (`<li>${el}</li>`)).join('');
    })
    listBody.innerHTML = list.map((el)=> (`<li>${el}</li>`)).join('');
    input.addEventListener('input', ()=>{
        if(input.value !== ''){
            button.hidden = false;
        }else{
            button.hidden = true;
        }
    })
}