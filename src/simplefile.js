function multiplicationTableForSeven(){
    const table = [];
    for(let i = 1;i<11;i++){
        table.push(`7 * ${i} = ${7*i}`)
    }
    return table
}
console.log(multiplicationTableForSeven())