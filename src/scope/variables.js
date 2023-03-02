var firstName; // Declarar. Valor por defecto undefined
firstName = 'Oscar'; //Asignar
console.log(firstName);

var lastName = "Rojas"; //Declarar y asignar
lastName = "Bedoya"; //Reasignar
console.log(lastName);

var secondName = 'Dabid'; //Declarar y asignar
var secondName = 'David'; //Redeclarar la variable
console.log(secondName);

// Let

let fruit = 'Apple'; //declarar / asignar
fruit = 'Kiwi'; // Reasignar
console.log(fruit)
// let fruit = 'Banana'; //No es posible redeclarar

//const

const animal = 'Dog'; // Declarar / Asignar
console.log(animal);
animal = 'Cat'; //No es posible reasignar
// const animal = 'Snake'; //No es posible redeclarar
console.log(animal);

//Const con listas

const vehicles = []; //Declarar / Asignar
vehicles.push('Mazda'); //Es posible reasignar, ya que se esta trabajando directamente sobre el arreglo, es decir, la variable ya existe en memoria y al llamarla nuevamente se estaría trabajando sobre el array
console.log(vehicles);