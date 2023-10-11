// ARRAY LOOPS
//NIVELL 1


//---------------------
//Exercici 1
let noms = ['Anna', 'Bernat', 'Clara'];
noms.forEach(nom => {
    console.log(nom);
});

console.log('-----------------');
//---------------------
//Exercici 2
for (const nom of noms) {
    console.log(nom);
}

console.log('-----------------');
//---------------------
//Exercici 3
let nums = [1, 2, 3, 4, 5, 6];
let arr = nums.filter(x => x%2 === 0);
console.log(arr);