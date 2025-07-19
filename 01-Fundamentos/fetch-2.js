// https://api.chucknorris.io/
fetch("https://api.chucknorris.io/jokes/random")
.then(resp => resp.json())
.then(resobj =>{
    console.log(resobj);
});

// NASA API: https://api.nasa.gov/
fetch("https://api.nasa.gov/insight_weather/?api_key=DEMO_KEY&feedtype=json&ver=1.0")
.then(resp => resp.json())
.then(resobj =>{
    console.log(resobj);
});

// https://pokeapi.co/
fetch("https://pokeapi.co/api/v2/pokemon/ditto")
.then(resp => resp.json())
.then(resobj =>{
    console.log(resobj);
});

