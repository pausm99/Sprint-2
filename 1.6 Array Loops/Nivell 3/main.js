// ARRAY LOOPS
//NIVELL 3


//---------------------
//Exercici 6
let noms = ['Anna', 'Bernat', 'Clara'];

for (const name of noms) {
    console.log(name, noms.indexOf(name));
}

console.log('---------------');
console.log('Second method:');

for (const [index, nom] of noms.entries()) {
    console.log(nom, index);
}