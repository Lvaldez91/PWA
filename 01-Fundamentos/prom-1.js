
function sumOne(number, callback){
    if(number >= 7){
        callback('The number is greather');
        return;
    }

    setTimeout(function(){
        callback(number + 1);
    }, 800);
}

sumOne(5, function(newValor){
    sumOne(newValor, function(newValor2){
        console.log(newValor2);
    });
});