var request = new XMLHttpRequest();

// se coloca True para que sea una petición asincrona
request.open("GET","https://reqres.in/api/users",true);
request.send(null);
request.onreadystatechange = function(state) {
    if(request.readyState == 4){
        var resp = request.response;
        var resp0 = JSON.parse(resp);
        console.log(resp0);
    }
};