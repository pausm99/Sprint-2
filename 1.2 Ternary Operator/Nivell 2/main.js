// TERNARY OPERATORS
//NIVELL 2


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
