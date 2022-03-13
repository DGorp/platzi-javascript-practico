/*=============================================
=            Salarios - Colombia            =
=============================================*/

/*----------  Utilidades  ----------*/

// Función para saber si un numero es par o no
function parOno(numero) {
    return numero % 2 === 0;
}

// Función para calcular el valor de un porcentaje
function valorPorcentaje(porcentaje, tamaño) {
    return (porcentaje * tamaño) / 100;
}

/*----------  Variables, constantes, arrays, objetos  ----------*/

const salariosColombia = colombia.map(function (persona) {
    return persona.salary;
});

const salariosColombiaOrdenado = salariosColombia.sort(function (a, b) {
    return a - b;
});

const porcentajeNecesitado = valorPorcentaje(
    10,
    salariosColombiaOrdenado.length
);
const porcentajeRestante =
    salariosColombiaOrdenado.length - porcentajeNecesitado;

const salariosColombiaTop = salariosColombiaOrdenado.splice(
    porcentajeRestante,
    porcentajeNecesitado
);

/*----------  Funciones  ----------*/

// Función para saber el promedio(media aritmética) general de salarios de un país
function promedioSalarios(lista, tamaño) {
    let promedio;
    let suma = 0;

    for (elemento in lista) {
        suma += lista[elemento];
    }

    promedio = suma / tamaño;

    return promedio;
}

// Función para saber la mediana general de salarios de un país
function medianaSalarios(lista) {
    const esPar = parOno(lista.length);
    const mitadLista = Math.floor(lista.length / 2);
    let mediana;

    if (!esPar) mediana = lista[mitadLista];
    if (esPar) mediana = (lista[mitadLista] + lista[mitadLista - 1]) / 2;

    return mediana;
}

/*----------  Llamadas a funciones  ----------*/

// Mediana y promedio - Generales
const medianaGeneralColombia = medianaSalarios(salariosColombiaOrdenado);
const promedioGeneralColombia = promedioSalarios(
    salariosColombiaOrdenado,
    salariosColombiaOrdenado.length
);

// Mediana y promedio - Top 10%
const medianaTopColombia = medianaSalarios(salariosColombiaTop);
const promedioTopColombia = promedioSalarios(
    salariosColombiaTop,
    salariosColombiaTop.length
);

/*----------  Mensajes a consola  ----------*/

console.group("Salarios generales - Colombia");
console.log(
    "La mediana general de los salarios de colombia es de: " +
        medianaGeneralColombia +
        " pesos colombianos"
);
console.log(
    "El promedio general de los salarios de colombia es de: " +
        promedioGeneralColombia +
        " pesos colombianos"
);
console.groupEnd();

console.group("Salarios top 10% - Colombia");
console.log(
    "La mediana del top 10% de los salarios de colombia es de: " +
        medianaTopColombia +
        " pesos colombianos"
);
console.log(
    "El promedio del top 10% de los salarios de colombia es de: " +
        promedioTopColombia +
        " pesos colombianos"
);
console.groupEnd();

/*=====  End of Salarios - Colombia  ======*/
