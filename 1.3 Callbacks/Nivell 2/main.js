// Callbacks
//NIVELL 2


//---------------------
//Exercici 3
function saludar(nom) {
    console.log('Hola ' + nom);
}

function esperarISaludar(nom, fn) {
    setTimeout(() => {
        fn(nom);
    }, 2000);
}

esperarISaludar('Pau', saludar);