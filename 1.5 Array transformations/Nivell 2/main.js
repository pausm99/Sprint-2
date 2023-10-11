// ARRAY TRANSFORMATIONS
//NIVELL 2


//---------------------
//Exercici 5
let a = [1, 3, 7, 10, 15, 17, 11, 5, 8, 12, 9];

let b = a.filter(x => x >= 10).map(x => x*2).reduce((accumulator, current) => accumulator + current);
console.log(b);