// TERNARY OPERATORS
//NIVELL 3


//---------------------
//Exercici 4
function parOImpar(arrayNums) {
    arrayNums.forEach(element => {
        console.log(element%2 === 0 ? element + ' és parell' : element + ' és imparell');
    });
}

parOImpar([1, 2, 3, 4, 5, 6, 7, 8, 10, 44, 43, 76, 55, 78]);