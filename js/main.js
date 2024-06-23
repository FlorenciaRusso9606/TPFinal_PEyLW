

/*************** PRODUCTS **************/
// Array de productos
const products=[
    {
        id:1,
        tipo: "Motorola",
        modelo:"Moto E22 64GB",
        precio:212400,
        img: "src/img/edge-40-neo-5g.png",
        descuento:29,
        cuotasSinInteres:3
    },
    {
        id:2,
        tipo: "Samsung",
        modelo:"Galaxy A04e 64GB",
        img: "src/img/galaxy-a04e.png",
        precio:236000,
        descuento:39,
        cuotasSinInteres:3
    },
    {
        id:3,
        tipo: "Samsung",
        modelo:"Galaxy A14 4G",
        img: "src/img/galaxy-a14-4g.png",
        precio:38000,
        descuento:32,
        cuotasSinInteres:6
    },
    {
        id:4,
        tipo: "Samsung",
        modelo:"Galaxy A04 128GB",
        img: "src/img/galaxy-a04-128gb.png",
        precio:298000,
        descuento:33,
        cuotasSinInteres:6
    },
    {
        id:5,
        tipo: "Samsung",
        modelo:"Galaxy A04s 128GB",
        img: "src/img/galaxy-a04s.png",
        precio:314000,
        descuento:35,
        cuotasSinInteres:6
    },
    {
        id:6,
        tipo: "Motorola",
        modelo:"Moto G23 4G",
        img: "src/img/moto-g23.png",
        precio:358700,
        descuento:26,
        cuotasSinInteres:6
    },
    {
        id:7,
        tipo: "Motorola",
        modelo:"Moto G14 4G",
        img: "src/img/moto-g14.png",
        precio:305000,
        descuento:23,
        cuotasSinInteres:6
    },
    {
        id:8,
        tipo: "Samsung",
        modelo:"Galaxy A04 64GB",
        img: "src/img/galaxy-a04-64gb.png",
        precio:236000,
        descuento:39,
        cuotasSinInteres:3
    },
    {
        id:9,
        tipo: "Motorola",
        modelo:"Moto G13 128GB 4G",
        img: "src/img/moto-g13-128gb.png",
        precio:272800,
        descuento:8,
        cuotasSinInteres:6
    },
    {
        id:10,
        tipo: "Samsung",
        img: "src/img/galaxy-a24.png",
        modelo:"Galaxy A24 4G",
        precio:554000,
        descuento:10,
        cuotasSinInteres:6
    },
    {
        id:11,
        tipo: "Samsung",
        img: "src/img/galaxy-a14-5g.png",
        modelo:"Galaxy A14 5G",
        precio:397000,
        descuento:11,
        cuotasSinInteres:6
    },
    {
        id:12,
        tipo: "Motorola",
        img: "src/img/edge-40-pro-5g.png",
        modelo:"Edge 40 Pro 5G",
        precio:1000000,
        descuento:25,
        cuotasSinInteres:6
    },
    {
        id:13,
        tipo: "Motorola",
        img: "src/img/edge-40-neo-5g.png",
        modelo:"Edge 40 Neo 5G",
        precio:621400,
        descuento:11,
        cuotasSinInteres:6
    },
    {
        id:14,
        tipo: "Samsung",
        img: "src/img/galaxy-a34-5g.png",
        modelo:"Galaxy A34 5G 128GB",
        precio:737000,
        descuento:15,
        cuotasSinInteres:6
    }


]
// Elementos del DOM
const productsContainer = document.querySelector("#products-container");
const categoryBtn = document.querySelectorAll(".category-btn");
const priceBtn = document.querySelectorAll(".price-btn");
let addProductsBtn = document.querySelectorAll(".add-to-cart");
const numberCart = document.getElementById("number");
// Variables de estado
let selectedCategory = null; // Categoría seleccionada
let selectedPriceRange = [0, 1500000]; // Rango de precio seleccionado (por defecto, todos los productos)


// Función para cargar y mostrar productos según los filtros
function loadProducts(choseProducts){
    productsContainer.innerHTML=""; // Vaciar contenedor de productos
    choseProducts.forEach(product =>{ //Iterar sobre cada producto del array
        const div = document.createElement("div"); // Crear un div para cada producto
        div.classList.add("card");
        // Calcular precio con descuento y formatear números
        const discountedPrice = Math.floor(product.precio - (product.precio * product.descuento / 100));
        const formattedDiscountedPrice = discountedPrice.toLocaleString("es-AR");
        const formattedOriginalPrice = product.precio.toLocaleString("es-AR");
         // Agregar contenido HTML del producto al div creado

        div.innerHTML=`
            <h3>${product.tipo}</h3>
            <h4>${product.modelo}</h4>
            <img src=${product.img} alt="${product.modelo}">
            <div class="price-container">
                <p class="discount">${product.descuento}% Off</p>
                <p class="actual-price">$${formattedDiscountedPrice}</p>
                <p class="old-price">$${formattedOriginalPrice}</p>
            </div>
            <div class="installments-container">
                <p>3 cuotasSinInteres</p>
                <p>con tarjetas seleccionadas</p>
            </div>
            <div class="shoppping">
                <i class="fa-solid fa-truck"></i>
                <p>Envío <span>gratis</span> a domicilio</p>
            </div>
            <button type="button" class="add-to-cart" id="${product.id}" >Agregar al carrito</button>
            `;
            productsContainer.append(div); // Agregar el div al contenedor de productos
    })
    updateaddProductBtn(addProductsBtn); // Actualizar event listeners de botones "Agregar al carrito"
}
loadProducts(products);

// Función para filtrar productos según categoría y rango de precios seleccionados
function filterProducts() {
    const filteredProducts = products.filter(product => {
        const inCategory = selectedCategory ? product.tipo === selectedCategory : true;
        const inPriceRange = product.precio >= selectedPriceRange[0] && product.precio <= selectedPriceRange[1];
        return inCategory && inPriceRange;
    });
    loadProducts(filteredProducts); // Cargar y mostrar los productos filtrados
}
// Event listeners para botones de categoría
categoryBtn.forEach(btn => {
    btn.addEventListener("click", (e) => {        
        categoryBtn.forEach(btn => btn.classList.remove("active")); // Remover clase "active" de todos los botones
        e.currentTarget.classList.add("active"); // Agregar clase "active" al botón clickeado
        selectedCategory = e.currentTarget.id === "all" ? null : e.currentTarget.id; // Establecer categoría seleccionada
        filterProducts();
    });
});
// Event listeners para botones de rango de precios
priceBtn.forEach(btn => {
    btn.addEventListener("click", (e) => {
        priceBtn.forEach(btn => btn.classList.remove("active")); // Remover clase "active" de todos los botones
        e.currentTarget.classList.add("active"); // Agregar clase "active" al botón clickeado
        // Establecer el rango de precios seleccionado basado en el texto del botón
        switch (e.currentTarget.textContent) {
            case "$0 - $300.000":
                selectedPriceRange = [0, 300000];
                break;
            case "$300.000 - $600.000":
                selectedPriceRange = [300000, 600000];
                break;
            case "$600.000 - $1.000.000":
                selectedPriceRange = [600000, 1000000];
                break;
            case "$1.000.000 - $1.500.000":
                selectedPriceRange = [1000000, 1500000];
                break;
            case "$0 - $1.500.000":
                selectedPriceRange = [0, 1500000];
                break;
            default:
                selectedPriceRange = [0, 1500000];
        }
        filterProducts();
    });
});
// Función para actualizar event listeners de botones "Agregar al carrito"
function updateaddProductBtn(){
    addProductsBtn = document.querySelectorAll(".add-to-cart"); // Seleccionar todos los botones "Agregar al carrito"
    addProductsBtn.forEach(btn =>{
        btn.addEventListener("click", addToCart)
    });
}
// Variables para el carrito de compras
let cartProducts; // Array que almacenará los productos agregados al carrito
let cartProductsLS = localStorage.getItem("cart-products"); // Obtener productos del carrito almacenados en localStorage
// Verificar si hay productos en el carrito en localStorage
if(cartProductsLS){
  cartProducts = JSON.parse(cartProductsLS); // Parsear productos de localStorage a objeto JavaScript
  refreshNumber(); // Actualizar contador de productos en el carrito
}else{
    cartProducts = []; // Si no hay productos en localStorage, inicializar el carrito como un array vacío
}
// Función para agregar un producto al carrito
function addToCart(e){
    const idBtn = e.currentTarget.id;
    const addedProduct= products.find(product => product.id == idBtn);
    if(cartProducts.some(product => product.id == idBtn)){
        const index = cartProducts.findIndex(product => product.id == idBtn);
        cartProducts[index].cantidad++;
    }else{
        addedProduct.cantidad=1;
        cartProducts.push(addedProduct);
    }
    refreshNumber();
    localStorage.setItem("cart-products", JSON.stringify(cartProducts));
}
function refreshNumber(){
    let newNumber = cartProducts.reduce((accumulator, product) =>accumulator + product.cantidad, 0);
    numberCart.innerText = newNumber;
}







