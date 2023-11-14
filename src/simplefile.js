function makeInteractiveList(div){
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
makeInteractiveList(document.createElement('div'))