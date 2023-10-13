// PROMISES & ASYNC/AWAIT
//NIVELL 3


//---------------------
//Exercici 6
let promise1 = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve('Sóc la promesa 1');
    }, 2000);
});

let promise2 = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve('Sóc la promesa 2');
    }, 3000);
});

Promise.all([promise1, promise2]).then(results => {
    console.log(results);
});