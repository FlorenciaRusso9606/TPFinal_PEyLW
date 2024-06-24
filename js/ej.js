function displayComparison(product1, product2) {
    const container = document.getElementById("comparison-container");
    container.innerHTML = `
        <div class="product-comparison">
            <div class="product">
                <img src="${product1.img}" alt="${product1.modelo}">
                <h3>${product1.modelo}</h3>
                <p>Precio: $${product1.precio.toLocaleString("es-AR")}</p>
                <p>Descuento: ${product1.descuento}%</p>
                <p>Cuotas sin interés: ${product1.cuotasSinInteres}</p>
            </div>
            <div class="product">
                <img src="${product2.img}" alt="${product2.modelo}">
                <h3>${product2.modelo}</h3>
                <p>Precio: $${product2.precio.toLocaleString("es-AR")}</p>
                <p>Descuento: ${product2.descuento}%</p>
                <p>Cuotas sin interés: ${product2.cuotasSinInteres}</p>
            </div>
        </div>
    `;
}

displayComparison(product1, product2);