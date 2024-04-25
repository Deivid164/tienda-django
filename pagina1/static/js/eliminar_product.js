let $btnEliminar = document.querySelector('.btn-del');
let $windowProduct = document.querySelector('.windowProduct')
let $containerAlert = document.querySelector('.containerAlert')

loadAddEventListener()
function loadAddEventListener(){
    $btnEliminar = document.addEventListener('click', alerta);
    document.addEventListener('click', eliminar);
}

function alerta(e){

    if(e.target.classList.contains('btn-del')){
        const delId= e.target.getAttribute('data-id');
        
        cart.forEach(products=>{
            if(products.id === delId){
                const alert= document.createElement('div');
                alert.classList.add('div-alert');
                alert.innerHTML=`
                <div class="content-alert">
                    <div class="content-btns">
                        <h5>¿Deseas eliminar el ${products.title}?</h5>
                        <button class='btn-delSi' data-id="${products.id}">Si</button>
                        <button class='btn-delNo' data-id="${products.id}">No</button>
                    </div>
                </div>
                `
                $containerAlert.appendChild(alert);
                $windowProduct.style.display='block'
            } 
        });    
    }
}

function eliminar(e){
    
    if(e.target.classList.contains('btn-delSi')){
        const idDelt= e.target.getAttribute('data-id');
        cart.forEach(value=> {
            if(idDelt === value.id){
                let delPrice= parseFloat(value.amount) * parseFloat(value.price);
                totalPrice= parseFloat(totalPrice) - parseFloat(delPrice);
                totalPrice= totalPrice.toFixed(2)

                cart= cart.filter((product)=> product.id !== idDelt);

                countProducts--;
                countProducts1--;

                $windowProduct.style.display="none"  
                $containerAlert.innerHTML=""      
            }  
        });    
    }
    
    else if(e.target.classList.contains('btn-delNo')){
        $windowProduct.style.display="none"
        $containerAlert.innerHTML="" 
    }
    
    loadHtml();
    lengCart();   
}