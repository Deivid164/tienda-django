const $imgCarrito = document.getElementById('imgCarrito');
const $cartProducts = document.getElementById('cart-products');
const $btnClose = document.getElementById('btn-x');
const $closeWindow = document.getElementById('closeWindow');

$imgCarrito.addEventListener('click', ()=> $cartProducts.style.display= 'block');
$imgCarrito.addEventListener('click', ()=> $closeWindow.style.display= 'block');

const CloseWindow= ()=> {
    $cartProducts.classList.add('close');
    
    setTimeout(() => {
       $cartProducts.classList.remove('close');
       $cartProducts.style.display='none'
       $closeWindow.style.display='none'
    }, 1000);
};

$btnClose.addEventListener('click', ()=> CloseWindow());
window.addEventListener('click', (e)=> e.target === $closeWindow && CloseWindow());