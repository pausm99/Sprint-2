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


//---------------------
//Exercici 3
function valor(num) {
    return num > 0 ? 'num és positiu' : num < 0 ? 'num és negatiu' : 'num és zero'
}

console.log(valor(0));
console.log(valor(-5));
console.log(valor(3));

function trobarMaxim(a, b, c) {
    if (a == b == c) return 'a, b i c són iguals';
    return a > b ?
        (a > c ? 'a és el nombre més gran' : 'c és el nombre més gran')
        : b > c ? 'b és el nombre més gran' : 'c és el nombre més gran';
}

console.log(trobarMaxim(1, 2, 3)); // c
console.log(trobarMaxim(1, 3, 2)); // b
console.log(trobarMaxim(2, 3, 1)); // b
console.log(trobarMaxim(2, 1, 3)); // c
console.log(trobarMaxim(3, 2, 1)); // a
console.log(trobarMaxim(3, 1, 2)); // a
console.log(trobarMaxim(1, 1, 1)); // iguals