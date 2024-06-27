let comparisonProducts = JSON.parse(localStorage.getItem("selectedProducts"));
const container = document.getElementById("container-comparison-products");
const btnBackShopping = document.getElementById("back-shopping");
function displayComparison(product1, product2) {
    const discountedPrice1 = Math.floor(product1.precio - (product1.precio * product1.descuento / 100));
    const formattedDiscountedPrice1 = discountedPrice1.toLocaleString("es-AR");
    const formattedOriginalPrice1 = product1.precio.toLocaleString("es-AR");
    const discountedPrice2 = Math.floor(product2.precio - (product2.precio * product2.descuento / 100));
    const formattedDiscountedPrice2 = discountedPrice2.toLocaleString("es-AR");
    const formattedOriginalPrice2 = product2.precio.toLocaleString("es-AR");

    container.innerHTML = `
        <div class="product-comparison">
            <div class="product container-products">
                <img src="${product1.img}" alt="${product1.modelo}">
                <h3>${product1.tipo}</h3>
                <h4>${product1.modelo}</h4>
                <p><span>Precio Original:</span> $${formattedOriginalPrice1}</p>
                <p><span>Precio con Descuento:</span> $${formattedDiscountedPrice1}</p>
                <p><span>Descuento:</span> ${product1.descuento}%</p>
                <p><span>Cuotas sin interés:</span> ${product1.cuotasSinInteres}</p>
                <p><span>Cámara frontal:</span> ${product1.camaraFrontal}</p>                
                <p><span>Cámara trasera:</span> ${product1.camaraTrasera}</p>
                <p><span>Memoria interna:</span> ${product1.memoriaInterna}</p>
                <p><span>Memoria RAM:</span> ${product1.memoriaRAM}</p>
            </div>
              <div class="product container-products">
                <img src="${product2.img}" alt="${product2.modelo}">
                <h3>${product2.tipo}</h3>
                <h4>${product2.modelo}</h4>
                <p><span>Precio Original: </span>$${formattedOriginalPrice2}</p>
                <p><span>Precio con Descuento: </span>$${formattedDiscountedPrice2}</p>
                <p><span>Descuento: </span>${product2.descuento}%</p>
                <p><span>Cuotas sin interés:</span> ${product2.cuotasSinInteres}</p>
                <p><span>Cámara frontal:</span> ${product2.camaraFrontal}</p>                
                <p><span>Cámara trasera:</span> ${product2.camaraTrasera}</p>
                <p><span>Memoria interna:</span> ${product2.memoriaInterna}</p>
                <p><span>Memoria RAM:</span> ${product2.memoriaRAM}</p>
            </div>
        </div>
    `;

    container.querySelector(".remove-product").addEventListener("click", removeProduct);
}
displayComparison(comparisonProducts[0], comparisonProducts[1]) 
