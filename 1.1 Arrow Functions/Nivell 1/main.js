// ARROW FUNCTIONS
//NIVELL 1


//---------------------
//Exercici 1
let add = (a, b) =>  a + b ;
console.log(add(1, 4));


//---------------------
//Exercici 2
let randomNumber = () =>  Math.floor(Math.random() * 101);
console.log(randomNumber());


//---------------------
//Exercici 3
class Person {
    //constructor
    constructor(name) {
        this.name = name;
        this.greet = () => 'Hello ' + this.name;
        
    }
}
let pau = new Person('Pau');
console.log(pau.greet());