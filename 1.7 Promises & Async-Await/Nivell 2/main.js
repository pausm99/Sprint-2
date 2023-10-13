// PROMISES & ASYNC/AWAIT
//NIVELL 2


//---------------------
//Exercici 5
let promise = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve('Hola, món');
    }, 2000);
});

async function funcioAsincrona() {
    try {
        const resultat = await promise;
        console.log(resultat);
    } catch (error) {
        console.log(error);
    }
}

funcioAsincrona();