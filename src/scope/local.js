function greeting (){
    let userName = 'Ana';
    console.log(userName);

    if(userName === 'Ana'){
        console.log(`Hola, ${userName}`)
    }
};

greeting();
console.log(userName); //No es posible acceder a esta variable ya que solo esta definida en el scope de la función o funciones anidadas en caso de tener.