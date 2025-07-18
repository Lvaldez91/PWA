function sumlow(num){
    return new Promise(function(resolve, reject){
        setTimeout(function(){
            resolve(num + 1);
            //reject(num + 1);
        }, 800);
    });
}

let sumFast = (num) =>{
    return new Promise((resolve, reject)=>{
        setTimeout(() => resolve(num + 1), 300);
    });
}

// Promesas una a una
sumlow(5).then(console.log);
sumFast(10).then(console.log);

// Ejecutando todas las promesas
Promise.all([sumFast(10), sumlow(5)])
    .then(response => {
        console.log(response);
    })
    .catch(console.log);

// Ejecutando todas las promesas
let promesas = [sumFast(10), sumlow(5), true, 'Todo Ok.']
Promise.all(promesas)
    .then(response => {
        console.log(response);
    })
    .catch(console.log);