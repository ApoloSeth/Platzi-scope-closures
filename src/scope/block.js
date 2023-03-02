function fruits (){
    if (true){
        var fruit1 = 'Apple';
        let fruit2 = 'Kiwi';
        const fruit3 = 'Banana'
        console.log(fruit2);
        console.log(fruit3); 
    }
    console.log(fruit1); //
    console.log(fruit2); //Solo tienen un alcence o scope block
    console.log(fruit3); //Solo tienen un alcence o scope block
}

fruits();
console.log(fruit1);