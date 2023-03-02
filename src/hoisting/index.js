
console.log(nameOfDog)
var nameOfDog = 'Cookie'

// Con funciones

nameDog();

function nameDog(){ //Esta función se eleva y queda superior a la invocación o inicialización
    console.log(`El mejor perro es ${nombre}`); // como name no esta declarada se eleva con valor por defecto undefined
};

var nombre = 'Cookie';