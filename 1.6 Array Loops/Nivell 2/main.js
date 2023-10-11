// ARRAY LOOPS
//NIVELL 1


//---------------------
//Exercici 1
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
