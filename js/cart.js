let cartProducts = localStorage.getItem("cart-products");
cartProducts = JSON.parse(cartProducts);
const emptyCartContainer  = document.getElementById("empty-cart");
const cartItemsContainer = document.getElementById("cart-items-container");
const cartActionsContainer = document.getElementById("cart-actions");
let btnDeleteProducto = document.querySelectorAll(".delete-product");
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

function deleteToCart(e){
    const idBtn = e.currentTarget.id;
   const index = cartProducts.findIndex(product => product.id == idBtn);
    cartProducts.splice(index, 1);
    loadCartProducts();
    localStorage.setItem("cart-products", JSON.stringify(cartProducts));
}
function updateTotal(){
    let calculated = cartProducts.reduce((acc, product)=> acc + (product.precio * product.cantidad), 0);
    total.innerHTML= `$${calculated}`;
}