// ARRAY LOOPS
//NIVELL 1


//---------------------
//Exercici 4
let obj = {
    nom: 'Ona',
    edat: 25,
    ciutat: 'Barcelona'
}
for (const key in obj) {
    const element = obj[key];
    console.log(element);
}

console.log('-----------------');
//---------------------
//Exercici 5
let numeros = [1, 2, 3, 4, 5, 6];
for (const iterator of numeros) {
    console.log(iterator);
    if (iterator === 5) break;
}