// ARRAY TRANSFORMATIONS
//NIVELL 3


//---------------------
//Exercici 6
let arr = [11, 12, 13, 14];
let operation= x => x > 10;

console.log(arr.every(operation) || arr.some(operation));