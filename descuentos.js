/*=============================================
=            Porcentajes y descuentos            =
=============================================*/

/*----------  Variables  ----------*/

// let precio; // Precio inicial del producto
// let descuento; // Descuento en porcentaje que se aplicara al precio inicial (%)

/*----------  Funciones  ----------*/

function calcularPrecio(precio, descuento) {
    const precioPorcentaje = 100 - descuento;
    const precioFinal = (precioPorcentaje * precio) / 100;

    return precioFinal;
}

/*----------  Llamadas a consola  ----------*/

console.group("Descuentos");
console.groupEnd();

/*=====  End of Porcentajes y descuentos  ======*/

/*=============================================
=            Globalización            =
=============================================*/

/*----------  Funciones  ----------*/

function obtenerPrecio() {
    // Apuntador a nuestra etiqueta "p" vacía en HTML
    const mensajeResultado = document.getElementById("resultPrice");

    const inputPrecio = document.getElementById("priceInput");
    const precio = inputPrecio.value;
    const inputDescuento = document.getElementById("discountInput");
    const descuento = inputDescuento.value;

    const precioFinal = calcularPrecio(precio, descuento);

    mensajeResultado.innerText =
        "El precio final a pagar es: " + precioFinal + "$";
}

/*=====  End of Globalización  ======*/
