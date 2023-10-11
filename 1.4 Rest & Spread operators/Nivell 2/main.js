// REST & SPREAD OPERATORS
//NIVELL 2


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
