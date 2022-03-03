/*=============================================
=            Reto - Cupones y/o códigos de descuento            =
=============================================*/

/*----------  Funciones  ----------*/

function calcularPrecio(precio, descuento) {
    const precioPorcentaje = 100 - descuento;
    const precioFinal = (precioPorcentaje * precio) / 100;

    return precioFinal;
}

/*----------  Variables  ----------*/

const cupones = [
    {
        nombre: "Programador Junior",
        descuento: 70,
    },
    {
        nombre: "Programador Semi-Senior",
        descuento: 60,
    },
    {
        nombre: "Programador Senior",
        descuento: 50,
    },
    {
        nombre: "Project Manager",
        descuento: 40,
    },
    {
        nombre: "Product Manager",
        descuento: 30,
    },
];

/* Constantes */

/*----------  Mensajes a consola  ----------*/

console.group("Secreto");
console.log("Felicidades encontraste los cupones de descuento");
console.log(cupones);
console.groupEnd();

/*=====  End of Reto - Cupones y/o códigos de descuento  ======*/

/*=============================================
=            Globalización            =
=============================================*/

/*----------  Funciones  ----------*/

function agregarCupon() {
    const precio = document.getElementById("priceInput");
    const valorPrecio = precio.value;

    const cupon = document.getElementById("discountInput");
    const valorCupon = cupon.value;

    const cuponValido = function (cupon) {
        return cupon.nombre === valorCupon;
    };

    const cuponUsuario = cupones.find(cuponValido);
    // console.log(cuponUsuario);

    if (!cuponUsuario) {
        const error = document.getElementById("throwError");
        error.innerText = "¡Cupon no valido!";
        // console.log("Error arreglado: " + valorCupon);
    } else {
        const descuento = cuponUsuario.descuento;
        const precioFinal = calcularPrecio(valorPrecio, descuento);

        const resultado = document.getElementById("resultPrice");
        resultado.innerText =
            "El precio de tu compra despues del cupon es de: " +
            precioFinal +
            "$";
    }
}

/*=====  End of Globalización  ======*/
