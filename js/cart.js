let cartProducts = localStorage.getItem("cart-products");
cartProducts = JSON.parse(cartProducts);
const emptyCartContainer  = document.getElementById("empty-cart");
const cartItemsContainer = document.getElementById("cart-items-container");
const cartActionsContainer = document.getElementById("cart-actions");
let btnDeleteProducto = document.querySelectorAll(".delete-product");
 const cart = document.getElementById("cart");
const total = document.getElementById("total");
function loadCartProducts(){
    if(cartProducts && cartProducts.length>0){
        emptyCartContainer.classList.add("disabled");
        cartItemsContainer.classList.remove("disabled");
        cartActionsContainer.classList.remove("disabled");
        cartItemsContainer.innerHTML="";
        cartProducts.forEach(product =>{
            const div = document.createElement("div");
            div.classList.add("cart-item");
            const discountedPrice = Math.floor(product.precio - (product.precio * product.descuento / 100));
            const subtotal = discountedPrice * product.cantidad;
            const formattedDiscountedPrice = discountedPrice.toLocaleString("es-AR");
            const formattedSubtotal = subtotal.toLocaleString("es-AR");
            div.innerHTML= `<div class="cart-article">
                            <p class="article-title">Artículo</p>
                            <div class="description-item">
                                <img src=${product.img} alt="${product.modelo}">
                                <p>${product.modelo}</p>
                            </div>
                        </div>
                        <div class="cant-items">
                            <p class="article-title">Cantidad</p>
                            <div><span>${product.cantidad}</span><button class="delete-product" id =${product.id}><i class="fa-solid fa-trash" style="color: #000000;"></i></button></div>
                        </div>
                        <div class="item-price">
                            <p class="article-title">Precio</p>
                            <p>$${formattedDiscountedPrice}</p>
                        </div>
                        <div class="item-price">
                            <p class="article-title">Subtotal</p>
                            <p>$${formattedSubtotal}</p>
                        </div>`;
        cartItemsContainer.append(div);
        })
    }else{
        
        cart.classList.remove("disabled");
        emptyCartContainer.classList.remove("disabled");
        cartItemsContainer.classList.add("disabled");
        cartActionsContainer.classList.add("disabled");
    }
    updateDeleteProductBtn();
    updateTotal();
}

function updateDeleteProductBtn(){
    btnDeleteProducto = document.querySelectorAll(".delete-product");
    btnDeleteProducto.forEach(btn =>{
        btn.addEventListener("click", deleteToCart)
    });
}
loadCartProducts();

function deleteToCart(e) {
    const idBtn = e.currentTarget.id;
    const index = cartProducts.findIndex(product => product.id == idBtn);
    
    // Verificar si el producto tiene más de una unidad en el carrito
    if (cartProducts[index].cantidad > 1) {
        // Si hay más de una unidad, simplemente decrementar la cantidad en 1
        cartProducts[index].cantidad--;
    } else {
        // Si solo hay una unidad, eliminar el producto del carrito
        cartProducts.splice(index, 1);
    }
    
    loadCartProducts(); // Volver a cargar los productos del carrito en la interfaz
    localStorage.setItem("cart-products", JSON.stringify(cartProducts)); // Actualizar localStorage
}
function updateTotal(){
    let calculated = cartProducts.reduce((acc, product)=> acc + (product.precio * product.cantidad), 0);
    total.innerHTML= `$${calculated}`;
}