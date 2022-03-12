/*=============================================
=            Promedio            =
=============================================*/

/*----------  Variables y constantes - Inicializadoras  ----------*/

let lista = [];
let iterator = 0;

/*----------  Funciones  ----------*/

function calcularPromedio(lista) {
    // let sumaLista = 0;

    // for (let i = 0; i < lista.length; i++) {
    //     sumaLista += lista[i];
    // }

    // Alternativa a un ciclo for, un metodo de los arrays "reduce"
    const sumaLista = lista.reduce(function (
        valorAcumulado = 0,
        nuevoElemento
    ) {
        return valorAcumulado + nuevoElemento;
    });

    const promedioLista = sumaLista / lista.length;

    return promedioLista;
}

function agregarElemento() {
    const listInput = document.getElementById("listInput");
    const listValue = parseInt(listInput.value);

    lista.push(listValue);

    let mensajeLista = document.getElementById("listMessage");
    mensajeLista.innerText += lista[iterator] + ", ";
    iterator++;

    console.log(lista);
}

/*----------  Ciclos  ----------*/

/*----------  Variables y constantes - Finalizadoras  ----------*/

/*----------  Llamadas a consola  ----------*/

console.group("Pruebas");
console.groupEnd();

/*=====  End of Promedio  ======*/

/*=============================================
=            Globalizacion            =
=============================================*/

function obtenerPromedio() {
    const promMessage = document.getElementById("promMessage");

    let promedio = calcularPromedio(lista);

    promMessage.innerText = "El promedio de tu lista es de: " + promedio;
}

/*=====  End of Globalizacion  ======*/
