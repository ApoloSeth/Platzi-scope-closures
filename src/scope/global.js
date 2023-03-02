//-----Global Scope
var fruit = 'apple';

function bestFruit(){
    console.log(fruit);
}

bestFruit();

function countries(){
    country = 'Colombia';
    console.log(country);
}

countries();
console.log(country); //Aunque no se definio como variable global, al solo asignarle valor sin declararla, la convierte en variable global.