// REST & SPREAD OPERATORS
//NIVELL 1


//---------------------
//Exercici 1
let array1 = [1, 3, 5, 7, 9];
let array2 = [2, 4, 6, 8, 10];
let array3 = [...array1, ...array2];
console.log(array3);


//---------------------
//Exercici 2
function suma(...args) {
    let suma = 0;
    for(const arg of args) {
        suma += arg;
    }
    return suma;
}

console.log(suma(12, 45, 78, 5, 9, 0, 2, 8));


//---------------------
//Exercici 3
let objecte1 = {
    nom: 'Taula',
    preu: 250
}

let objecte2 = {...objecte1};
objecte2.preu = 300;

console.log(objecte1, objecte2);


//---------------------
//Exercici 4
let a, b, rest;
[a, b, ...rest] = [1, 2, 'hola', 4, 'asdas'];
console.log(a);
console.log(b);
console.log(rest);
