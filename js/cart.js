const cartProducts = JSON.parse(localStorage.getItem("cart-products"));
const emptyCartContainer  = document.getElementById("empty-cart");
const cartItemsContainer = document.getElementById("cart-items-container");
const cartActionsContainer = document.getElementById("cart-actions")
console.log(cartProducts);
if(cartProducts){
    emptyCartContainer.classList.add("disabled");
    cartItemsContainer.classList.remove("disabled");
    cartItemsContainer.innerHTML="";
    cartProducts.forEach(product =>{
        const div = document.createElement("div");
        div.classList.add("cart-item");
        const discountedPrice = Math.floor((product.precio - (product.precio * product.descuento / 100))).toFixed(0).replace(/\B(?=(\d{3})+(?!\d))/g, ".");
        div.innerHTML= `<div class="cart-article">
                        <p class="article-title">Artículo</p>
                        <div class="description-item">
                            <img src=${product.img} alt="">
                            <p>${product.modelo}</p>
                        </div>
                    </div>
                    <div class="cant-items">
                        <p class="article-title">Cantidad</p>
                        <div><span>${product.cantidad}</span><button id =${product.id}><i class="fa-solid fa-trash" style="color: #000000;"></i></button></div>
                    </div>
                    <div class="item-price">
                        <p class="article-title">Precio</p>
                        <p>${discountedPrice}</p>
                    </div>`;
    cartItemsContainer.append(div);
    })
}
    