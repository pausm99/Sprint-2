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


//---------------------
//Exercici 3
const promise2 = (input) => {
    return new Promise((resolve, reject) => {
        if (input === 'Hola') {
            setTimeout(() => {
                resolve(console.log(input));
            }, 2000);
        }
        else reject('Rebutjada');
    });
};

promise2('Hola');
promise2('Hola!');
promise2('Adeu');