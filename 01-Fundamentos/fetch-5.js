fetch('https://api.chucknorris.io/jokes/random')
    .then(response => response.json())
    .then(usuario =>{
        console.log(usuario);
    });

fetch('https://api.chucknorris.io/jokes/random')
    .then(response => {
        response.clone().json()
        .then(categories => {
            console.log(categories.updated_at);
        })
        .then(resp => {
            console.log(resp);
        })
    });