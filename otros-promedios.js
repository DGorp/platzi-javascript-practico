
/*=============================================
=            Reto: Calcular otros tipos de promedio            =
=============================================*/

/*----------  Responde las siguientes preguntas  ----------*/

/*----------  ¿Cuál tipo de promedio elegiste para trabajar?  ----------*/
// He elegido la media geométrica, pero hare otros promedios, pues la media
//  aritmética es muy sencilla, asi que hare diferentes tipos de promedio
// He decidido además de hacer la media geométrica, también hacer la media
// armónica

/*----------  ¿Qué casos de uso tiene tu tipo de promedio?  ----------*/
// Según san "Google", la media geométrica se utiliza con mas frecuencia para calcular
// la tasa de crecimiento porcentual promedio de algunas series dadas, por ejemplo
// del crecimiento de las ventas de un negocio en un año
// La media armónica tiene su utilidad en el calculo de velocidades distintas, de un
// mismo medio, pero que por diferentes razones sean diferentes

/*----------  ¿Cómo traduces su fórmula a código en Javascript?  ----------*/
// En las proximas lineas lo demuestro, seguir bajando

/*----------  Start of Media Geométrica  ----------*/

/*----------  Variables  ----------*/

let lista = [];
let iterator = 0;

/*----------  Funciones  ----------*/

function agregarElemento() {
    const listInput = document.getElementById("listInput");
    const listValue = parseInt(listInput.value);

    lista.push(listValue);

    const mensajeLista = document.getElementById("listMessage");
    mensajeLista.innerText += lista[iterator] + ", ";
    iterator++;

}

function calcularMediaGeometrica(lista) {
    let mediaGeo = 0;
    const multiplicaLista = lista.reduce(function(a, b) {
        return a * b;
    });
    mediaGeo = Math.sqrt(Math.pow(multiplicaLista, 1 / (lista.length / 2)));

    return mediaGeo;
}

/*----------  End of Media Geométrica  ----------*/

/*----------  Start of Media Armónica  ----------*/

/*----------  Funciones  ----------*/

// Función para encontra el maximo comun divisor de dos numeros
function comunDenominador(lista) {
    let iterador = 1;
    let denominador = lista[0];
    for (iterador; iterador < lista.length; iterador ++) {
        denominador *= lista[iterador];
    }
    return denominador;
}

// Función para obtener los numeros equivalentes de nuestro denominador
function numeroEquivalente(numero, lista) {
    const denominador = comunDenominador(lista);

    const equivalente = denominador * 1 / numero;

    return equivalente;
}
// Esta función para obtener el numero equivalente de una fracción debe ser
// modificada para recibir un numerador que no sea '1'

// Función para sumar fracciones
function sumarFraccion(lista) {
    let numeros = [];
    let suma = 0;

    for (elemento in lista) {
        numeros.push(numeroEquivalente(lista[elemento], lista));
        suma += numeros[elemento];
    }

    return suma;
}
// Esta función para sumar fracciones debe ser modificada para poder imprimir
// el numerador y el denominador

function calcularMediaArmonica(lista) {
    const largo = lista.length;
    const denominador = comunDenominador(lista);
    const sumaFraccion = sumarFraccion(lista);

    const mediaArmonica = (largo * denominador) / sumaFraccion;

    return mediaArmonica;
}

/*----------  End of Media Armónica  ----------*/

/*=====  End of Reto: Calcular otros tipos de promedio  ======*/

/*=============================================
=            Globalización            =
=============================================*/

/*----------  Funciones  ----------*/

function obtenerMediaGeometrica() {
    const medGeoMessage = document.getElementById("medGeoMessage");
    const mediaGeometrica = calcularMediaGeometrica(lista);

    medGeoMessage.innerText = mediaGeometrica;
}

function obtenerMediaArmonica() {
    const medArmMessage = document.getElementById("medArmMessage");
    const mediaArmonica = calcularMediaArmonica(lista);
    medArmMessage.innerText = mediaArmonica;
}

/*=====  End of Globalización  ======*/
