// PROMISES & ASYNC/AWAIT
//NIVELL 1


//---------------------
//Exercici 1
let promise = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve('Hola, món');
    }, 2000);
});


//---------------------
//Exercici 2
promise.then(result => {
    console.log(result);
});