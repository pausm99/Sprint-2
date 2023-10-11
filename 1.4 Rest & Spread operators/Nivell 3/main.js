// REST & SPREAD OPERATORS
//NIVELL 3


//---------------------
//Exercici 5
function fn(arg1, arg2, arg3) {
    console.log(arg1 + arg2 + arg3);
}

let array1 = [1, 2, 3];
fn(...array1);


//---------------------
//Exercici 6
let obj1 = {
    pa: 34,
    pb: 12
}

let obj2 = {
    pc: 15,
    pd: 8
}

let obj3 = {...obj1, ...obj2};
console.log(obj3);