

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
        cuotasSinInteres:3,
        bateria : "4020 mAh",
        camaraFrontal: "5 mpx",
        camaraTrasera: "16 mpx",
        memoriaInterna: "64 GB",
        memoriaRAM: "4 GB"
    },
    {
        id:2,
        tipo: "Samsung",
        modelo:"Galaxy A04e 64GB",
        img: "src/img/galaxy-a04e.png",
        precio:236000,
        descuento:39,
        cuotasSinInteres:3,
        bateria : "4020 mAh",
        camaraFrontal: "5 mpx",
        camaraTrasera: "50 mpx",
        memoriaInterna: "64 GB",
        memoriaRAM: "3 GB"
    },
    {
        id:3,
        tipo: "Samsung",
        modelo:"Galaxy A14 4G",
        img: "src/img/galaxy-a14-4g.png",
        precio:380000,
        descuento:32,
        cuotasSinInteres:6,
        bateria : "5000 mAh",
        camaraFrontal: "13 mpx",
        camaraTrasera: "50 mpx",
        memoriaInterna: "128 GB",
        memoriaRAM: "4 GB"
    },
    {
        id:4,
        tipo: "Samsung",
        modelo:"Galaxy A04 128GB",
        img: "src/img/galaxy-a04-128gb.png",
        precio:298000,
        descuento:33,
        cuotasSinInteres:6,
        bateria : "5000 mAh",
        camaraFrontal: "5 mpx",
        camaraTrasera: "50 mpx",
        memoriaInterna: "128 GB",
        memoriaRAM: "4 GB"
    },
    {
        id:5,
        tipo: "Samsung",
        modelo:"Galaxy A04s 128GB",
        img: "src/img/galaxy-a04s.png",
        precio:314000,
        descuento:35,
        cuotasSinInteres:6,
        bateria : "5000 mAh",
        camaraFrontal: "5 mpx",
        camaraTrasera: "50 mpx",
        memoriaInterna: "128 GB",
        memoriaRAM: "4 GB"
    },
    {
        id:6,
        tipo: "Motorola",
        modelo:"Moto G23 4G",
        img: "src/img/moto-g23.png",
        precio:358700,
        descuento:26,
        cuotasSinInteres:6,
        bateria : "5000 mAh",
        camaraFrontal: "16 mpx",
        camaraTrasera: "50 mpx",
        memoriaInterna: "128 GB",
        memoriaRAM: "4 GB"
    },
    {
        id:7,
        tipo: "Motorola",
        modelo:"Moto G14 4G",
        img: "src/img/moto-g14.png",
        precio:305000,
        descuento:23,
        cuotasSinInteres:6,
        bateria : "5000 mAh",
        camaraFrontal: "8 mpx",
        camaraTrasera: "50 mpx",
        memoriaInterna: "128 GB",
        memoriaRAM: "4 GB"
    },
    {
        id:8,
        tipo: "Samsung",
        modelo:"Galaxy A04 64GB",
        img: "src/img/galaxy-a04-64gb.png",
        precio:236000,
        descuento:39,
        cuotasSinInteres:3,
        bateria : "5000 mAh",
        camaraFrontal: "5 mpx",
        camaraTrasera: "16 mpx",
        memoriaInterna: "64 GB",
        memoriaRAM: "4 GB"
    },
    {
        id:9,
        tipo: "Motorola",
        modelo:"Moto G13 128GB 4G",
        img: "src/img/moto-g13-128gb.png",
        precio:272800,
        descuento:8,
        cuotasSinInteres:6,
        bateria : "5000 mAh",
        camaraFrontal: "8 mpx",
        camaraTrasera: "50 mpx",
        memoriaInterna: "128 GB",
        memoriaRAM: "4 GB"
    },
    {
        id:10,
        tipo: "Samsung",
        img: "src/img/galaxy-a24.png",
        modelo:"Galaxy A24 4G",
        precio:554000,
        descuento:10,
        cuotasSinInteres:6,
        bateria : "5000 mAh",
        camaraFrontal: "13 mpx",
        camaraTrasera: "50 mpx",
        memoriaInterna: "128 GB",
        memoriaRAM: "6 GB"
    },
    {
        id:11,
        tipo: "Samsung",
        img: "src/img/galaxy-a14-5g.png",
        modelo:"Galaxy A14 5G",
        precio:397000,
        descuento:11,
        cuotasSinInteres:6,
        bateria : "5000 mAh",
        camaraFrontal: "13 mpx",
        camaraTrasera: "50 mpx",
        memoriaInterna: "128 GB",
        memoriaRAM: "4 GB"
    },
    {
        id:12,
        tipo: "Motorola",
        img: "src/img/edge-40-pro-5g.png",
        modelo:"Edge 40 Pro 5G",
        precio:1000000,
        descuento:25,
        cuotasSinInteres:6,
        bateria : "4600 mAh",
        camaraFrontal: "60 mpx",
        camaraTrasera: "50 mpx",
        memoriaInterna: "256 GB",
        memoriaRAM: "8 GB"
    },
    {
        id:13,
        tipo: "Motorola",
        img: "src/img/edge-40-neo-5g.png",
        modelo:"Edge 40 Neo 5G",
        precio:621400,
        descuento:11,
        cuotasSinInteres:6,
        bateria : "5000 mAh",
        camaraFrontal: "32 mpx",
        camaraTrasera: "50 mpx",
        memoriaInterna: "256 GB",
        memoriaRAM: "12 GB"
    },
    {
        id:14,
        tipo: "Samsung",
        img: "src/img/galaxy-a34-5g.png",
        modelo:"Galaxy A34 5G 128GB",
        precio:737000,
        descuento:15,
        cuotasSinInteres:6,
        bateria : "5000 mAh",
        camaraFrontal: "13 mpx",
        camaraTrasera: "48 mpx",
        memoriaInterna: "128 GB",
        memoriaRAM: "6 GB"
    },
    {
        id:14,
        tipo: "TCL",
        img: "src/img/tcl-40.png",
        modelo:"TCL 405",
        precio:170699,
        descuento:15,
        cuotasSinInteres:6,
        bateria : "5000 mAh",
        camaraFrontal: "5 mpx",
        camaraTrasera: "13 mpx",
        memoriaInterna: "64 GB",
        memoriaRAM: "2 GB"
    }


]
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
           <button type="button" class="select-product" data-id="${product.id}">Seleccionar</button>
            `;
            productsContainer.append(div); // Agregar el div al contenedor de productos
    })
    updateaddProductBtn(addProductsBtn); // Actualizar event listeners de botones "Agregar al carrito"
    updateSelectProductBtn();
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









const compareBtn = document.querySelector("#compare-btn");
let selectedProducts = []; //Inicializa un array vacío para almacenar los productos seleccionados.
const comparisonContainer1 = document.getElementById("comparison-product-1");
const comparisonContainer2 = document.getElementById("comparison-product-2");


//Agrega event listeners a todos los botones de selección de productos.
function updateSelectProductBtn() {
    const selectProductBtns = document.querySelectorAll(".select-product");
    selectProductBtns.forEach(btn => {
        btn.addEventListener("click", selectProduct);
    });
}
function selectProduct(e) { //Maneja la selección y deselección de productos para la comparación.
    const productId = e.currentTarget.getAttribute("data-id"); //Obtiene el id
    const selectedProduct = products.find(product => product.id == productId);

    if (selectedProducts.some(product => product.id == selectedProduct.id)) {
        // Si el producto ya está seleccionado, lo deseleccionamos
        selectedProducts = selectedProducts.filter(product => product.id != productId); //elimina el producto con el id igual a productId del array selectedProducts
        e.currentTarget.textContent = "Seleccionar"; // Cambia el texto del botón
        updateComparisonContainers();
    } else {
        // Si hay menos de 2 productos seleccionados, agregamos el nuevo producto
        if (selectedProducts.length < 2) {
            selectedProducts.push(selectedProduct);
            e.currentTarget.textContent = "Deseleccionar"; // Cambia el texto del botón
            updateComparisonContainers();
        } else {
            alert("Solo puedes comparar dos productos a la vez."); //Si ya hay dos productos seleccionados, muestra una alerta.
        }
    }

    compareBtn.disabled = selectedProducts.length !== 2; // Habilita o deshabilita el botón de comparar
    saveSelectedProducts();//Guarda los productos seleccionados y el estado del botón de comparar en el almacenamiento local.
}

function updateComparisonContainers() { //Actualiza los contenedores de comparación con los productos seleccionados.
    //Si no hay productos seleccionados, vacía ambos contenedores.
    if (selectedProducts.length === 0) {
        comparisonContainer1.innerHTML = "";
        comparisonContainer2.innerHTML = "";
        //Si hay un producto seleccionado, lo muestra en el primer contenedor y vacía el segundo.
    } else if (selectedProducts.length === 1) {
        displayComparison(comparisonContainer1, selectedProducts[0]);
        comparisonContainer2.innerHTML = "";
        //Si hay dos productos seleccionados, los muestra en ambos contenedores.
    } else if (selectedProducts.length === 2) {
        displayComparison(comparisonContainer1, selectedProducts[0]);
        displayComparison(comparisonContainer2, selectedProducts[1]);
    }
}
//Muestra la información de un producto en un contenedor de comparación.
function displayComparison(container, product) {
    container.innerHTML = `
        <div class="product">
            <img src="${product.img}" alt="${product.modelo}">
            <h3>${product.tipo}</h3>
            <h4>${product.modelo}</h4>
            <button class="remove-product" data-id="${product.id}">Eliminar</button>
        </div>
    `;
    container.querySelector(".remove-product").addEventListener("click", removeProduct);//Agrega un event listener al botón de eliminar para que ejecute la función removeProduct
}

//Maneja la eliminación de un producto de la comparación.
function removeProduct(e) {
    const productId = e.currentTarget.getAttribute("data-id");//Obtiene el id del producto a eliminar
    selectedProducts = selectedProducts.filter(product => product.id != productId); //elimina el producto con el id igual a productId del array selectedProducts
    const productButton = document.querySelector(`[data-id="${productId}"]`);
    productButton.textContent = "Seleccionar"; // Cambia el texto del botón
    updateComparisonContainers();
    compareBtn.disabled = selectedProducts.length !== 2;
    saveSelectedProducts();
}

//Guarda los productos seleccionados y el estado del botón de comparar en el almacenamiento local.
function saveSelectedProducts() {
    localStorage.setItem('selectedProducts', JSON.stringify(selectedProducts));
    // Guarda el estado del botón de comparación en localStorage
    localStorage.setItem('compareBtnState', compareBtn.disabled ? 'disabled' : 'enabled');
}

//Carga los productos seleccionados del almacenamiento local y actualiza los contenedores de comparación.
function loadSelectedProducts() {
    const savedProducts = localStorage.getItem('selectedProducts');
    if (savedProducts) {
        selectedProducts = JSON.parse(savedProducts);
        updateComparisonContainers();
    }
}
//Redirige a la página de comparación (comparison.html) cuando se hace clic en el botón de comparar.
compareBtn.addEventListener("click", ()=>{
    window.location.href = 'comparison.html';
})

//Restaura el estado del botón de comparar al cargar la página.
function restoreCompareBtnState() {
    const savedCompareBtnState = localStorage.getItem('compareBtnState');
    if (savedCompareBtnState) {
        compareBtn.disabled = savedCompareBtnState === 'disabled';
    }
}
restoreCompareBtnState()
loadSelectedProducts(); //Carga los productos seleccionados del almacenamiento local (localStorage).
updateSelectProductBtn(); //Actualiza los botones de selección de productos para agregarles los event listeners correspondientes. 