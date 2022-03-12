/*=============================================
=            Mediana            =
=============================================*/

/*----------  Variables y constantes - Inicializadoras  ----------*/

let lista = [];
let listaOrdenada = [];
let iterator = 0;

/*----------  Funciones  ----------*/

function parOno(numero) {
    if (numero % 2 == 0) {
        return true;
    } else { return false; }
}

function calcularMediana(lista) {
    const listaPar = parOno(lista.length);
    let mitadLista;
    let mediana;

    if (listaPar) {
        mitadLista = lista.length / 2;

        mediana = (lista[mitadLista] + lista[(mitadLista - 1)]) / 2;

        return mediana;
    } else { 
        mitadLista = lista.length / 2;
        mitadLista = parseInt(mitadLista);

        console.log(mitadLista);
        mediana = lista[mitadLista];

        return mediana;
    }

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

/*=====  End of Mediana  ======*/

/*=============================================
=            Globalizacion            =
=============================================*/

function obtenerMediana() {
    const medMessage = document.getElementById("medMessage");
    const mensajeListaOrdenada = document.getElementById("orderListMessage");

    /*----------  Reto - Encapsular codigo en funciones(hecho) y ordenar una lista desordenada  ----------*/

    listaOrdenada = lista.sort(function (a, b) {
        return a - b;
    });

    let mediana = calcularMediana(listaOrdenada);

    mensajeListaOrdenada.innerText = listaOrdenada.join();

    medMessage.innerText = mediana;
}

/*=====  End of Globalizacion  ======*/
