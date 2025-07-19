let img = document.querySelector('img');

fetch('superman.png')
.then(Response => Response.blob())
.then(imagen => {
    var imgPath = URL.createObjectURL(imagen);
    img.src = imgPath;
})
.catch(console.error);