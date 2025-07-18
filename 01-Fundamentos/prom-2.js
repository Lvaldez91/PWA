
function sumOne(number){
    // Estructura de la promesa
    var promesa = new Promise(function(resolve, reject){
        setTimeout(function(){
        resolve(number + 1);
        }, 800);
    });

    return promesa;
}

sumOne(5).then(newNumber =>{
    console.log(newNumber);
    // simepre regresa una poromesa
    return sumOne(newNumber);
}).then(newNumber => {
    console.log(newNumber);
    return sumOne(newNumber);
}).then(newNumber => {
    console.log(newNumber);
});

// optimizado
sumOne(5)
    .then(sumOne());