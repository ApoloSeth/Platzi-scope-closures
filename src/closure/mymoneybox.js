function moneyBox(coins){
    let saveCoins = 0;
    saveCoins += coins;
    console.log(`MoneyBox: $${saveCoins}`)
};

moneyBox(5); 
moneyBox(5); //Cada que se ejecuta una función (inicializar-instanciat) se genera un nuevo contexto de ejecución. que genera un nuevo ambito léxico ('Se reinicia las variables')

//Solución del ejercicio con Closures

function myMoneyBox(){
    let saveCoins = 0;
    function countCoins(coins){
        saveCoins += coins;
        console.log(`My MoneyBox: $${saveCoins}`);
    }
    return countCoins;
};

const myMoneyBox1 = myMoneyBox();
myMoneyBox1(5);
myMoneyBox1(5);

const lista = [];
lista.append(5);
console.log(lista)