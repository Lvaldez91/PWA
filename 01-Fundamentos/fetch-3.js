let usuario = {
    nombre: 'Lucero',
    edad:33
};

fetch('https://reqres.in/api/users',{
    method : 'POST',
    body: JSON.stringify(usuario),
    headers:{ 'Content-Type':'application/json'}
})
.then(Response => Response.json())
.then(console.log)
.catch(console.error);