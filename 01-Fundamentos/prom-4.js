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

// Ejecutando todas las promesas
let promesas = [sumFast(10), sumlow(5)]
Promise.all(promesas)
    .then(response => {
        console.log(response);
    })
    .catch(console.log);

Promise.race(promesas)
    .then(response => {
        console.log(response);
    })
    .catch(console.log);