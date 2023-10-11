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