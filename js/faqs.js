
// Seleccionar todos los elementos con la clase ".acc_box"
let accBox = document.querySelectorAll(".acc_box");
console.log(accBox); // Mostrar en la consola todos los elementos seleccionados

// Seleccionar todos los elementos con la clase ".symbol"
let symbol = document.querySelectorAll(".symbol");

// Iterar sobre cada elemento ".acc_box" usando forEach
accBox.forEach((item, index) => {
    // Agregar un event listener para el evento "click" a cada elemento ".acc_box"
    item.addEventListener("click", () => {
        // Verificar si el elemento actual tiene la clase "active"
        if (item.classList.contains("active")) {
            // Si ya tiene la clase "active", la eliminamos
            item.classList.remove("active");
            // Cambiamos el contenido del elemento ".symbol" dentro de "item" a "+"
            item.querySelector(".symbol").textContent = "+";
        } else {
            // Si no tiene la clase "active", la agregamos
            item.classList.add("active");
            // Cambiamos el contenido del elemento ".symbol" dentro de "item" a "-"
            item.querySelector(".symbol").textContent = "-";
        }
    });
});