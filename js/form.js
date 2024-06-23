document.getElementById('payment-form').addEventListener('input', validateForm);
        
function validateForm() {
    let isValid = true;

    // Limpiar errores previos
    document.querySelectorAll('.error').forEach(span => span.textContent = '');

    // Validar email
    const email = document.getElementById('email').value;
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(email)) {
        document.getElementById('email-error').textContent = 'Por favor, ingrese un email válido.';
        isValid = false;
    }

    // Validar nombre
    const nombre = document.getElementById('nombre').value;
    const namePattern = /^[A-Za-z\s]+$/;
    if (!namePattern.test(nombre.trim())) {
        document.getElementById('nombre-error').textContent = 'Por favor, ingrese un nombre válido (solo letras).';
        isValid = false;
    }

    // Validar apellido
    const apellido = document.getElementById('apellido').value;
    if (!namePattern.test(apellido.trim())) {
        document.getElementById('apellido-error').textContent = 'Por favor, ingrese un apellido válido (solo letras).';
        isValid = false;
    }

    // Validar DNI
    const dni = document.getElementById('dni').value;
    if (dni.trim() === '' || isNaN(dni) || !(dni > 1000000 && dni < 99000000)) {
        document.getElementById('dni-error').textContent = 'Por favor, ingrese un DNI válido.';
        isValid = false;
    }

    // Validar género
    const genero = document.getElementById('genero').value;
    if (genero === '') {
        document.getElementById('genero-error').textContent = 'Por favor, seleccione su género.';
        isValid = false;
    }

    // Validar fecha de nacimiento
    const fechaNacimiento = document.getElementById('fecha-nacimiento').value;
    const regexFechaNacimiento = /^(0[1-9]|[12][0-9]|3[01])\/(0[1-9]|1[0-2])\/\d{4}$/;
    if (!regexFechaNacimiento.test(fechaNacimiento)) {
        document.getElementById('fecha-nacimiento-error').textContent = 'Por favor, ingrese una fecha de nacimiento válida (DD/MM/AAAA).';
        isValid = false;
    } else {
        const partesFecha = fechaNacimiento.split('/');
        const dia = parseInt(partesFecha[0], 10);
        const mes = parseInt(partesFecha[1], 10) - 1;
        const anio = parseInt(partesFecha[2], 10);
        const fecha = new Date(anio, mes, dia);
        if (fecha.getFullYear() !== anio || fecha.getMonth() !== mes || fecha.getDate() !== dia) {
            document.getElementById('fecha-nacimiento-error').textContent = 'Por favor, ingrese una fecha de nacimiento real.';
            isValid = false;
        }
    }

    // Validar teléfono
    const telefono = document.getElementById('telefono').value;
    if (!/^\d{10}$/.test(telefono)) {
        document.getElementById('telefono-error').textContent = 'Por favor, ingrese un número de teléfono válido (10 dígitos).';
        isValid = false;
    }

    // Validar calle
    const calle = document.getElementById('calle').value;
    if (calle.trim() === '') {
        document.getElementById('calle-error').textContent = 'Por favor, ingrese su calle.';
        isValid = false;
    }

    // Validar altura
    const altura = document.getElementById('altura').value;
    if (altura.trim() === '' || isNaN(altura)) {
        document.getElementById('altura-error').textContent = 'Por favor, ingrese una altura válida.';
        isValid = false;
    }

    // Validar provincia
    const provincia = document.getElementById('provincia').value;
    if (!namePattern.test(provincia.trim())) {
        document.getElementById('provincia-error').textContent = 'Por favor, ingrese una provincia válida (solo letras).';
        isValid = false;
    }

    // Validar localidad
    const localidad = document.getElementById('localidad').value;
    if (!namePattern.test(localidad.trim())) {
        document.getElementById('localidad-error').textContent = 'Por favor, ingrese una localidad válida (solo letras).';
        isValid = false;
    }

    // Validar método de envío
    const metodoEnvio = document.querySelector('input[name="metodo-envio"]:checked');
    if (!metodoEnvio) {
        document.getElementById('metodo-envio-error').textContent = 'Por favor, seleccione un método de envío.';
        isValid = false;
    }

    // Habilitar o deshabilitar el botón de enviar
    document.getElementById('submit-button').disabled = !isValid;

    return isValid;
}

document.getElementById('payment-form').addEventListener('submit', function(event) {
    if (!validateForm()) {
        event.preventDefault(); // Prevenir el envío del formulario si no es válido
    }
});

let cartProducts = localStorage.getItem("cart-products");
cartProducts = JSON.parse(cartProducts);
const subtotal = document.getElementById("subtotal");
const total = document.getElementById("total");
const summaryContainer = document.getElementById("summary");

function loadCartProducts() {

    if (cartProducts && cartProducts.length > 0) {
        cartProducts.forEach(product => {
            const div = document.createElement("div");
            div.classList.add("product-description");
            div.innerHTML = `
                
                <img src="${product.img}" alt="${product.modelo}">
                <p>${product.modelo}</p>
            `;
            summaryContainer.appendChild(div);
        });
    }
    updateTotal();
}

function updateTotal() {

     calculatedSubtotal = cartProducts.reduce((acc, product) => acc + (product.precio * product.cantidad), 0);
    subtotal.textContent = `$${calculatedSubtotal}`;
    total.textContent = `$${calculatedSubtotal}`;
}

loadCartProducts();