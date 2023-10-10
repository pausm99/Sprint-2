// ARROW FUNCTIONS
//---------------------
//NIVELL 2
//Exercici 4
function printNumbers(arrayNum) {
    for (let i = 0; i < arrayNum.length; i++) {
        let a = () => ( arrayNum[i] );
        console.log(a());
    }
}

printNumbers([12, 3, 9, 5, 0]);