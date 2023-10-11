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


//---------------------
//Exercici 4
function imprimir(element) {
    console.log(element + ' processat!');
}

function processarElements(array, fn) {
    array.forEach(element => {
        fn(element);
    });
}

processarElements(['e1', 'e10', 'e5', 'e34'], imprimir);