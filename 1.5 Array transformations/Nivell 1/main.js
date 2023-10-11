// ARRAY TRANSFORMATIONS
//NIVELL 1


//---------------------
//Exercici 1
let a = [1, 2, 3, 4];
let b = a.map(x => x*x);

console.log(b);


//---------------------
//Exercici 2
let c = [1, 2, 3, 4];
let d = c.filter(x => x%2 === 0);

console.log(d);

//---------------------
//Exercici 3
let e = [1, 10, 8, 11];
let f = e.find(x => x > 10);
console.log(f);