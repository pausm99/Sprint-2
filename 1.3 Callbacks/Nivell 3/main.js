// Callbacks
//NIVELL 3


//---------------------
//Exercici 5
function imprmirCadena(cadena) {
    console.log(cadena);
}

function processarCadena(cadenaChars, fn) {
    cadenaChars = cadenaChars.toUpperCase();
    fn(cadenaChars);
}

processarCadena('cadena de caracters en minuscules', imprmirCadena);