
function sumOne(number, callback){
    if(number >= 7){
        callback('The number is greather');
        return;
    }

    setTimeout(function(){
        callback(number + 1);
    }, 800);
}

// Callbacks - para ejecutar n veces un segmento de código.
sumOne(5, function(error, newValor){
        if(error){
            console.log(error);
            return;
        }
    sumOne(newValor, function(error,newValor2){
            if(error){
                console.log(error);
                return;
            }
        console.log(newValor2);
    });
});