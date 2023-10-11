// Callbacks
//NIVELL 1


//---------------------
//Exercici 1
function callbackFunc(nombre) {
    console.log(nombre);
}

function processar(nombre, fn) {
    fn(nombre);
}

processar(19, callbackFunc);


//---------------------
//Exercici 2
function add(n1, n2) {
    return n1 + n2;
}

function calculadora(n1, n2, fn) {
    console.log(fn(n1, n2));
}

calculadora(3, 8, add);