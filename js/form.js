document.getElementById("payment-form").addEventListener("input", validateForm);

function validateForm() {
    let isValid = true;

    // Limpiar errores previos
    document.querySelectorAll(".error").forEach(span => span.textContent = "");

    // Validar email
    const email = document.getElementById("email").value;
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(email)) {
        document.getElementById("email-error").textContent = "Por favor, ingrese un email válido.";
        isValid = false;
    }

    // Validar nombre
    const name = document.getElementById('name').value;
    const namePattern = /^[A-Za-z\s]+$/;
    if (!namePattern.test(name.trim())) {
        document.getElementById("name-error").textContent = "Por favor, ingrese un nombre válido (solo letras).";
        isValid = false;
    }

    // Validar apellido
    const lastname = document.getElementById("lastname").value;
    if (!namePattern.test(lastname.trim())) {
        document.getElementById("lastname-error").textContent = "Por favor, ingrese un apellido válido (solo letras).";
        isValid = false;
    }

    // Validar DNI
    const dni = document.getElementById("dni").value;
    if (dni.trim() === '' || isNaN(dni) || !(dni > 1000000 && dni < 99000000)) {
        document.getElementById("dni-error").textContent = "Por favor, ingrese un DNI válido.";
        isValid = false;
    }

    // Validar género
    const gender = document.getElementById("gender").value;
    if (gender === '') {
        document.getElementById("gender-error").textContent = "Por favor, seleccione su género.";
        isValid = false;
    }

    // Validar fecha de nacimiento
    const fechaNacimiento = document.getElementById("birth-date").value;
    const regexFechaNacimiento = /^(0[1-9]|[12][0-9]|3[01])\/(0[1-9]|1[0-2])\/\d{4}$/;
    if (!regexFechaNacimiento.test(fechaNacimiento)) {
        document.getElementById("birth-date-error").textContent = "Por favor, ingrese una fecha de nacimiento válida (DD/MM/AAAA).";
        isValid = false;
    } else {
        const partsDate = fechaNacimiento.split('/');
        const day = parseInt(partsDate[0], 10);
        const month = parseInt(partsDate[1], 10) - 1;
        const year = parseInt(partsDate[2], 10);
        const fecha = new Date(year, month, day);
        if (fecha.getFullYear() !== year || fecha.getMonth() !== month || fecha.getDate() !== day) {
            document.getElementById("birth-date-error").textContent = "Por favor, ingrese una fecha de nacimiento real.";
            isValid = false;
        }
    }

    // Validar teléfono
    const phone = document.getElementById("phone").value;
    const phonePattern =/^\d{10}$/
    if (!phonePattern.test(phone)) {
        document.getElementById("phone-error").textContent = "Por favor, ingrese un número de teléfono válido (10 dígitos).";
        isValid = false;
    }

    // Validar calle
    const street = document.getElementById("street").value;
    if (street.trim() === '') {
        document.getElementById("street-error").textContent = "Por favor, ingrese su calle.";
        isValid = false;
    }

    // Validar altura
    const altura = document.getElementById("altura").value;
    if (altura.trim() === '' || isNaN(altura)) {
        document.getElementById("altura-error").textContent = "Por favor, ingrese una altura válida.";
        isValid = false;
    }

    // Validar provincia
    const province = document.getElementById("province").value;
    if (!namePattern.test(province.trim())) {
        document.getElementById("province-error").textContent = "Por favor, ingrese una provincia válida (solo letras).";
        isValid = false;
    }

    // Validar localidad
    const location = document.getElementById("location").value;
    if (!namePattern.test(location.trim())) {
        document.getElementById("location-error").textContent = "Por favor, ingrese una localidad válida (solo letras).";
        isValid = false;
    }

    // Validar método de envío
    const metodoEnvio = document.querySelector('input[name="send-method"]:checked');
    if (!metodoEnvio) {
        document.getElementById("send-method-error").textContent = "Por favor, seleccione un método de envío.";
        isValid = false;
    }

    // Habilitar o deshabilitar el botón de enviar
    document.getElementById("submit-button").disabled = !isValid;

    return isValid;
}

document.getElementById("payment-form").addEventListener("submit", function(event) {
    event.preventDefault(); // Prevenir el envío del formulario para controlarlo manualmente
    if (validateForm()) {
        // Si el formulario es válido, redirigir a la siguiente página
        window.location.href = 'form2.html';
    }
});

// Traer los productos del localStorage
let cartProducts = localStorage.getItem("cart-products"); // Obtiene los productos del localStorage
cartProducts = JSON.parse(cartProducts); // Convierte los productos de JSON a objeto JavaScript

// Acceder a los elementos del DOM
const subtotal = document.getElementById("subtotal"); 
const total = document.getElementById("total"); 
const summaryContainer = document.getElementById("summary"); 

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

// Cargar los productos al cargar la página
loadCartProducts();
