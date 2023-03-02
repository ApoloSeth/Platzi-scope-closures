
function greeting(){
    let userName = 'Oscar';

    function displayUserName(){
        return `Hello ${userName}`
    }
    return displayUserName;
}

const greeting1 = greeting();
console.log(greeting1); //Retornamos la función, la definición de la función displayUSerName
console.log(greeting1()); //Estamos invocando la función y ejecutando
