document.getElementById("payment-method-form").addEventListener("submit", function(event) {
    event.preventDefault(); // Evitar el envío automático del formulario

    // Valida campos antes de finalizar pedido
    const isValid = validateForm();
    
    if (isValid) {
        buycart();
        window.location.href = 'confirmation.html';

    }
});

function validateForm() {
    let isValid = true;

    // Limpia errores previos
    document.querySelectorAll(".error").forEach(span => span.textContent = '');

    // Valida número de tarjeta
    const cardNumber = document.getElementById("card-number").value;
    if (!/^[\d ]+$/.test(cardNumber)) {
        document.getElementById("card-number-error").textContent = "Por favor, ingrese un número de tarjeta válido.";
        isValid = false;
    }

    // Valida fecha de expiración
    const expDate = document.getElementById("expiration-date").value;
    const regexexpDate = /^(0[1-9]|1[0-2])\/\d{4}$/;
    if (!regexexpDate.test(expDate)) {
        document.getElementById("expiration-date-error").textContent = "Por favor, ingrese una fecha de expiración válida (MM/AAAA).";
        isValid = false;
    }

    // Valida nombre del titular
    const ownerName = document.getElementById("owner-name").value;
    const namePattern = /^[A-Za-z\s]+$/;
    if (!namePattern.test(ownerName.trim())) {
        document.getElementById("owner-name-error").textContent = "Por favor, ingrese un nombre válido (solo letras).";
        isValid = false;
    }

    // Valida código de seguridad (CVV)
    const safeCode = document.getElementById('safe-code').value;
    const codigoPattern = /^\d{3,4}$/;
    if (!codigoPattern.test(safeCode)) {
        document.getElementById("safe-code-error").textContent = "Por favor, ingrese un código de seguridad válido (3 o 4 dígitos).";
        isValid = false;
    }

    // Valida número de document (opcional)
    const documento = document.getElementById("document-number").value;
    if (documento.trim() === "" || isNaN(documento) || !(documento > 1000000 && documento < 99000000)) {
        document.getElementById("document-number-error").textContent = "Por favor, ingrese un document válido.";
        isValid = false;
    }
    return isValid;
    document.getElementById('submit-button').disabled = !isValid;
}
document.getElementById("payment-method-form").addEventListener("submit", function(event) {
    if (!validateForm()) {
        event.preventDefault(); // Prevenir el envío del formulario si no es válido
    }
});
// Traer los productos del localStorage
let cartProducts = localStorage.getItem("cart-products"); // Obtiene los productos del localStorage
cartProducts = JSON.parse(cartProducts); // Convierte los productos de JSON a objeto JavaScript

// Acceder a los elementos del DOM
const subtotal = document.getElementById("subtotal"); 
const total = document.getElementById("total"); 
const summaryContainer = document.getElementById("summary"); 
const buyArticlesBtn = document.getElementById("buy-articles"); 

// Cargar los productos en el resumen
function loadCartProducts() {
    if (cartProducts && cartProducts.length > 0) { // Verifica si hay productos en el carrito
        cartProducts.forEach(product => { // Recorre cada producto en el carrito
            const div = document.createElement("div"); // Crea un nuevo elemento div para cada producto
            div.classList.add("product-description"); // Añade una clase al div para estilos CSS
            div.innerHTML = `
                <img src="${product.img}" alt="${product.modelo}"> <!-- Muestra la imagen del producto -->
                <p>${product.modelo}</p> <!-- Muestra el modelo del producto -->
            `;
            summaryContainer.appendChild(div); // Agrega el div al contenedor de resumen
        });
    }
    updateTotal(); // Llama a la función para actualizar el total de precios
}

// Actualizar el total de precios (subtotal y total)
function updateTotal() {
    // Cálculo del subtotal sumando el precio de todos los productos en el carrito
    calculatedSubtotal = cartProducts.reduce((acc, product) => acc + (product.precio * product.cantidad), 0);
    subtotal.textContent = `$${calculatedSubtotal}`; // Actualiza el texto del subtotal en el DOM
    total.textContent = `$${calculatedSubtotal}`; // Actualiza el texto del total en el DOM
}

// Función para comprar artículos (vacía el carrito)
function buycart() {
    cartProducts.length = 0; // Vacía el arreglo de productos en el carrito
    localStorage.setItem("cart-products", JSON.stringify(cartProducts)); // Actualiza el localStorage con el carrito vacío
}

// Cargar los productos al cargar la página
loadCartProducts();