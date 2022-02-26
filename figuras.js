/*=============================================
=            Figura geométrica - Cuadrado            =
=============================================*/

/*----------  Funciones  ----------*/

function squarePerimeter(lado) {
    return lado * 4;
}

function squareArea(lado) {
    return lado * lado;
}

/*----------  Mensajes a consola  ----------*/

console.group("Cuadrado"); // Nos permite agrupar en la consola ciertas impresiones en consola
console.groupEnd(); // Termina el grupo de nuestros elementos en consola

/*=====  End of Figura geométrica - Cuadrado  ======*/

/*=============================================
=            Figura geométrica - Triangulo            =
=============================================*/

/*----------  Funciones  ----------*/

function trianglePerimeter(lado1, lado2, base) {
    return lado1 + lado2 + base;
}

function triangleArea(lado1, lado2, base) {
    const semiperimetro = (lado1 + lado2 + base) / 2;
    const area = Math.sqrt(
        semiperimetro *
            (semiperimetro - lado1) *
            (semiperimetro - lado2) *
            (semiperimetro - base)
    );
    return area;
}

// Reto, calcular la altura de un triangulo en base a sus tres lados e identificar el tipo de triangulo
function triangleHeight(lado1, lado2, base) {
    const semiperimetro = (lado1 + lado2 + base) / 2;
    const area = Math.sqrt(
        semiperimetro *
            (semiperimetro - lado1) *
            (semiperimetro - lado2) *
            (semiperimetro - base)
    );
    const altura = (area / 3) * 2;

    return altura;
}

/*----------  Mensajes a consola  ----------*/

console.group("Triangulo"); // Nos permite agrupar en la consola ciertas impresiones en consola
console.groupEnd(); // Termina el grupo de nuestros elementos en consola

/*=====  End of Figura geométrica - Triangulo  ======*/

/*=============================================
=            Figura geométrica - Circulo            =
=============================================*/

/*----------  Variables  ----------*/

const PI = Math.PI;

/*----------  Funciones  ----------*/

function circlePerimeter(radio) {
    const diametro = radio * 2;
    return diametro * PI;
}

function circleArea(radio) {
    return radio * radio * PI;
}

/*----------  Mensajes a consola  ----------*/

console.group("Circulo");
console.groupEnd();

/*=====  End of Figura geométrica - Circulo  ======*/

/*=============================================
=            Globalización            =
=============================================*/

/*----------  Funciones  ----------*/

/* Cuadrado */

function perimetroCuadrado() {
    const input = document.getElementById("squareInput");
    const value = input.value;
    const perimetro = squarePerimeter(value);

    alert("El valor es: " + perimetro);
}

function areaCuadrado() {
    const input = document.getElementById("squareInput");
    const value = input.value;
    const area = squareArea(value);

    alert("El valor es:" + area);
}

/* Triangulo */

function perimetroTriangulo() {
    const input1 = document.getElementById("triangleInput1");
    const value1 = parseInt(input1.value);
    const input2 = document.getElementById("triangleInput2");
    const value2 = parseInt(input2.value);
    const input3 = document.getElementById("triangleInput3");
    const value3 = parseInt(input3.value);

    const perimeter = trianglePerimeter(value1, value2, value3);

    alert("El valor es: " + perimeter);
}

function areaTriangulo() {
    const input1 = document.getElementById("triangleInput1");
    const value1 = parseInt(input1.value);
    const input2 = document.getElementById("triangleInput2");
    const value2 = parseInt(input2.value);
    const input3 = document.getElementById("triangleInput3");
    const value3 = parseInt(input3.value);

    const area = triangleArea(value1, value2, value3);

    alert("El valor es: " + area);
}

// Reto, calcular la altura de un triangulo en base a sus tres lados e identificar el tipo de triangulo
function alturaTriangulo() {
    const input1 = document.getElementById("triangleInput1");
    const value1 = parseInt(input1.value);
    const input2 = document.getElementById("triangleInput2");
    const value2 = parseInt(input2.value);
    const input3 = document.getElementById("triangleInput3");
    const value3 = parseInt(input3.value);

    if (value1 == value2 && (value1 == value3) || (value2 == value3) ) {
        const altura = triangleHeight(value1, value2, value3);

        alert("El valor es: " + altura);
        alert("Es un triangulo equilatero");
    } else if (
    (value1 == value2 && value1 != value3) ||
    (value1 == value3 && value2 != value3) ||
    (value2 == value3 && value3 != value1)) {
        const altura = triangleHeight(value1, value2, value3);

        alert("El valor es: " + altura);
        alert("Es un triangulo isosceles");
    } else if (
    (value1 || value2) != value3 &&
    (value1 || value3) != value2 &&
    (value2 || value3) != value1) {
        const altura = triangleHeight(value1, value2, value3);

        alert("El valor es: " + altura);
        alert("Es un triangulo escaleno");
    } else {
        alert("Autodestrucción activada");
    }

}

/*----------  Circulo  ----------*/

function perimetroCirculo() {
    const input = document.getElementById("circleInput");
    const value = input.value;
    const perimetro = circlePerimeter(value);

    alert("El valor es: " + perimetro);
}

function areaCirculo() {
    const input = document.getElementById("circleInput");
    const value = input.value;
    const area = circleArea(value);

    alert("El valor es: " + area);
}

/*=====  End of Globalización  ======*/
