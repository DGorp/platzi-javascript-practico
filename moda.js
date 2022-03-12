/*=============================================
=            Moda            =
=============================================*/

/*----------  Reto - Encapsular el codigo visto en la clase en una o varias funciones  ----------*/

/*----------  Variables y constantes - Inicializadoras  ----------*/

let lista = [];
const conteoLista = {};
let iterator = 0;

/*----------  Funciones  ----------*/

function calcularModa(lista) {
    lista.map(function (elemento) {
        if (conteoLista[elemento]) {
            conteoLista[elemento] += 1;
        } else {
            conteoLista[elemento] = 1;
        }
    });
    const objetoArray = Object.entries(conteoLista).sort(
        function (a, b) {
            return a[1] - b[1];
        }
    );

    const moda = objetoArray[objetoArray.length - 1];
    return moda;
}

function agregarElemento() {
    const listInput = document.getElementById("listInput");
    const listValue = parseInt(listInput.value);

    lista.push(listValue);

    let mensajeLista = document.getElementById("listMessage");
    mensajeLista.innerText = lista.join(); // Una opcion de los arrays para imprimir sus elementos
    // mensajeLista.innerText += lista[iterator] + ", ";

    iterator++;
}

/*----------  Llamadas a consola  ----------*/

console.group("Pruebas");
console.groupEnd();

/*=====  End of Moda  ======*/

/*=============================================
=            Globalizacion            =
=============================================*/

function obtenerModa() {
    const modMessage = document.getElementById("modMessage");
    const moda = calcularModa(lista);

    modMessage.innerText = moda[0] + ", y aparecio " + moda[1] + " veces";
}

/*=====  End of Globalizacion  ======*/
