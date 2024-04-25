const $products = document.querySelector('.products');
const $containerItems = document.querySelector('.container-items');
let $countProducts = document.getElementById('countProducts');
let $countProducts1 = document.getElementById('countProducts1');
let $price = document.getElementById('price');

let cart = JSON.parse(localStorage.getItem("ListCar")) || [];
let totalPrice = JSON.parse(localStorage.getItem("price") || 0);
let countProducts = 0;
let countProducts1 = 0;

loadAddEventListener()
function loadAddEventListener(){
    $products.addEventListener('click', Product);
    $containerItems.addEventListener('click', addSubtract);
}

function Product(e){
    e.preventDefault()
    if(e.target.classList.contains('btn-cart')){
        const products= e.target.parentElement;
        content(products);
    }   
}

function content(e){
    const infoProducts= {
        img: e.querySelector('.img-product').src,  
        title: e.querySelector('.title').textContent,      
        price: e.querySelector('div p span').textContent,
        id: e.querySelector('a').getAttribute('data-id'),
        amount: 1
    }
    totalPrice = parseFloat(totalPrice) + parseFloat(infoProducts.price);
    totalPrice = totalPrice.toFixed(2)
    
    const exists= cart.find((product)=>product.id === infoProducts.id);
    if(exists){
        const pro= cart.map((product)=>{
            if(product.id === infoProducts.id){
                product.amount++;
                return product;
            }

            else{
                return product;
            }
        });
        cart= [...pro];
    }
    else{
        cart= [...cart, infoProducts];
        countProducts++;
        countProducts1++;
    }
    loadHtml();
};

function loadHtml(){
    clearHtml();
    cart.forEach(product =>{
        const newDiv= document.createElement('div');
        newDiv.classList.add('list');
        newDiv.innerHTML = `
            <div class="container-btn-del">
                <button class="btn-del" data-id=${product.id}>x</button>
            </div>
            <div class="content-html">
            <div class="container-img-html">
                <img class='img-html' src=${product.img} alt='fotoTeclado'/>
            </div>  
            <div class="container-title-amount">
                <h2 class='title-html'>${product.title}</h2>
                <div class='container-amount'>
                    <button class="subtract-html" data-id=${id}>-</button>  
                    <h3 class="amount-html"> ${product.amount}</h3>
                    <button class="add-html" data-id=${id}>+</button> 
                </div>   
            </div>   
        `
        $containerItems.appendChild(newDiv);
        $countProducts.classList.add('appearCounter');
        $price.innerHTML= totalPrice
        
    });   
    saveLocalStorage(); 
}

function clearHtml(){
    $containerItems.innerHTML= ""   
}

function addSubtract(e){
    const addSubtracts= e.target.getAttribute('data-id');

    if(e.target.classList.contains('add-html')){
        cart.forEach(value =>{
            if(addSubtracts === value.id){
                totalPrice= parseFloat(value.price) + parseFloat(totalPrice);
                totalPrice= totalPrice.toFixed(2);
                value.amount++;
            }
        });
    }

    if(e.target.classList.contains('subtract-html')){
        cart.forEach(value=> {
            if(addSubtracts === value.id){
                totalPrice= parseFloat(totalPrice) - parseFloat(value.price);
                totalPrice= totalPrice.toFixed(2);
                value.amount--;

                cart= cart.filter((product)=> product.amount !== 0); 
            }  
        });
    }
    lengCart();
    loadHtml();
}   

function saveLocalStorage(){
    localStorage.setItem("ListCar", JSON.stringify(cart));
    localStorage.setItem('price', JSON.stringify(parseFloat(totalPrice)));

    const carroLength = cart.length;
    localStorage.setItem('contadorCarrito', JSON.stringify(carroLength));

    $countProducts.innerHTML= JSON.parse(localStorage.getItem("contadorCarrito"));
    $countProducts1.innerHTML= JSON.parse(localStorage.getItem("contadorCarrito"));
}

function lengCart(){
    if(cart.length === 0){

        $containerItems.classList.add('cartCero')
        $containerItems.innerHTML="Carrito esta vacío 😔";

        $countProducts1.innerHTML=0;
        $price.innerHTML= 0;
        $countProducts.classList.remove('appearCounter');
    }
}

window.addEventListener('DOMContentLoaded', () => {
    let datos = localStorage.getItem('ListCar');
    if (datos){
        loadHtml()
        misDatos = JSON.parse(datos);
     
    } else {
 
        misDatos = {};
    }
});

