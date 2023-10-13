// PROMISES & ASYNC/AWAIT
//NIVELL 1


//---------------------
//Exercici 1
let promise = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve('Hola, món');
    }, 2000);
});