function objectUser(){
    const ageNum = prompt('enter age');
    const user = {
        age: ageNum,
    }
    const admin = Object.assign({role: 'admin'},user);
    return [user,admin]
}
console.log(objectUser())