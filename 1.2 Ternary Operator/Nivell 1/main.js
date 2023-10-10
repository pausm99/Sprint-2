// TERNARY OPERATORS
//NIVELL 1


//---------------------
//Exercici 1
function potConduir(edat) {
    return edat >= 18 ? 'Pots conduir' : 'No pots conduir';
}

console.log(potConduir(24));
console.log(potConduir(18));
console.log(potConduir(17));


//---------------------
//Exercici 2
function comparaNumeros(num1, num2) {
    if (num1 == num2) return 'num1 i num2 són iguals';
    return num1 > num2 ? 'num1 és més gran' : 'num2 és més gran';
}

console.log(comparaNumeros(2, 6));
console.log(comparaNumeros(9, 4));
console.log(comparaNumeros(5, 5));