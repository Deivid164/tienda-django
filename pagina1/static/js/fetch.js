let $valorDollar= document.getElementById('valor');
let $fechaActual= document.getElementById('fecha');

const url = "https://api.cmfchile.cl/api-sbifv3/recursos_api/dolar?apikey=e23a79421f77265fe7b5be965250a2d81dd8f4dc&formato=json";

fetch(url)
.then(res => res.json())
.then(data => {

    $valorDollar.innerHTML = "Dollar actual : " + data.Dolares[0].Valor
    $fechaActual.innerHTML = "Fecha : " + data.Dolares[0].Fecha   
    
});