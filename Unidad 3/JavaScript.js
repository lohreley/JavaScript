//1
<<<<<<< HEAD
function noVale() {
=======
function noVale(){
>>>>>>> 7324f995fef97d7695616b52aa62c07d9063c149
    let noValgoNi5 = 4;
    return noValgoNi5;
}

//2
<<<<<<< HEAD
function anio80() {
    let miAnioDeNacimiento = 1991;
    let meGustariaTener80Anios = 80;
    let voyATener80ElAnio = miAnioDeNacimiento + meGustariaTener80Anios;
=======
function anio80(){
    let miAnioDeNacimiento = 1991;
    let meGustariaTener80Anios = 80;
    let voyATener80ElAnio = miAnioDeNacimiento+meGustariaTener80Anios;
>>>>>>> 7324f995fef97d7695616b52aa62c07d9063c149
    return voyATener80ElAnio;
}

//3
<<<<<<< HEAD
function dineroFaltante() {
    let costoDeUnaTele = 10000;
    let ahorros = 9000;
    let dineroQueMeFalta = costoDeUnaTele - ahorros;
    return dineroQueMeFalta;
}

//4

function diasDecada() {
    let diasPorAnio = 365;
    let cantidadDeAniosEnUnaDecada = 10;
    let cantidadDeDiasEnUnaDecada = diasPorAnio * cantidadDeAniosEnUnaDecada;
    return cantidadDeDiasEnUnaDecada;
}

//5

function pizza(porciones) {
    return porciones / 8;
}

//6

function animal(animal) {
    return animal == 'perro';
}

//7

function desigualdad() {
    return 'flan' != 'flan con dulce de leche';
}

//8

function edad(age) {
    let soyMayorDeEdad = age > 17;
    return soyMayorDeEdad;
}

//9

function edad25(age) {
    let soyMenorDe25 = age < 25;
    return soyMenorDe25;
}

//10

function mesEnero(mes) {
    let estamosEnEnero = 'Enero' === mes;
    return estamosEnEnero;
}

//11

function noEnero(mes) {
    let noEstamosEnEnero = 'Enero' !== mes;
    return noEstamosEnEnero;
}

//12

function notaParcial() {
    let miNotaEnElParcial = 8;
    let notaMinimaParaAprobar = 6;
    let estoyAprobado = miNotaEnElParcial >= notaMinimaParaAprobar;
    return estoyAprobado;
}

//13

function horaAlmuerzo(hora) {
    let esHoraDeAlmorzar = hora <= 12;
    return esHoraDeAlmorzar;
}


//211 superficie de un rectángulo

function superficieRectangulo(lado1, lado2) {
    let sup = lado1 * lado2;
    return sup;
}

//212 superficie de un triangulo

function superficieTriangulo(lado1, lado2) {
    let sup = (lado1 * lado2) / 2;
    return sup;
}

//213 superficie de un circulo

function superficieCirculo(diametro) {
    let sup = 3.14 * diametro;
    return sup;
}

//22 tres variables, suma, producto, promedio

function tresVariables() {
    let num1 = 2;
    let num2 = 5;
    let num3 = 10;
    console.log("suma: " + (num1 + num2 + num3));
    console.log("producto: " + (num1 * num2 * num3));
    console.log("promedio: " + ((num1 + num2 + num3) / 3));
}

//23 tienda 5 articulos
/*Una tienda ofrece un descuento del 15% sobre el total de cada compra y un cliente 
desea saber cuánto deberá pagar finalmente por su compra. Deberán crear 5 artículos 
los cuales tendrán sus nombres y valores, luego mostrar el descuento aplicado
                mas el total final */
function tienda() {
    let lapiz = ["lapiz", 50];
    let goma = ["goma", 30];
    let hojas = ["hojas", 300];
    let birome = ["birome", 70];
    let colores = ["colores", 200];
    let subtotal = (lapiz[1] + goma[1] + hojas[1] + birome[1] + colores[1]);
    let descuento = (subtotal) * 15 / 100;

    console.log("Art 1: " + lapiz[0] + " " + lapiz[1]);
    console.log("Art 2: " + goma[0] + " " + goma[1]);
    console.log("Art 3: " + hojas[0] + " " + hojas[1]);
    console.log("Art 4: " + birome[0] + " " + birome[1]);
    console.log("Art 5: " + colores[0] + " " + colores[1]);
    console.log("subtotal: " + subtotal);
    console.log("descuento: " + descuento);
    console.log("total: " + (subtotal - descuento));
}

//cantidad en dolares

function dolar(dolar) {
    let pesos = 200;
    console.log("La cantidad de $" + pesos + " equivale a u$s" + (pesos / dolar));
}

//calculo del iva

function iva(precio) {
    console.log("El iva de $" + precio + " es: $" + (precio * 21 / 100));
}
/*
 */
=======
     function dineroFaltante(){
         let costoDeUnaTele = 10000;
         let ahorros = 9000;
         let dineroQueMeFalta = costoDeUnaTele - ahorros;
         return dineroQueMeFalta;
     }

//4

     function diasDecada(){
         let diasPorAnio = 365;
         let cantidadDeAniosEnUnaDecada = 10;
         let cantidadDeDiasEnUnaDecada = diasPorAnio * cantidadDeAniosEnUnaDecada;
         return cantidadDeDiasEnUnaDecada;
     }

//5

     function pizza(porciones){
         return porciones/8;
     }

//6

     function animal(animal){
         return animal == 'perro';
     }

//7

     function desigualdad(){
         return 'flan' != 'flan con dulce de leche';
     }

//8

     function edad(age){
         let soyMayorDeEdad = age > 17;
         return soyMayorDeEdad;
     }

//9

     function edad25(age){
        let soyMenorDe25 = age < 25;
        return soyMenorDe25;
    }

//10

    function mesEnero(mes){
        let estamosEnEnero = 'Enero' === mes;
        return estamosEnEnero;
    }

//11

    function noEnero(mes){
        let noEstamosEnEnero = 'Enero' !== mes;
        return noEstamosEnEnero;
    }

//12

    function notaParcial(){
        let miNotaEnElParcial = 8;
        let notaMinimaParaAprobar = 6;
        let estoyAprobado = miNotaEnElParcial >= notaMinimaParaAprobar;
        return estoyAprobado;
    }

//13

    function horaAlmuerzo(hora){
        let esHoraDeAlmorzar = hora <= 12;
        return esHoraDeAlmorzar;
    }







/*
*/
>>>>>>> 7324f995fef97d7695616b52aa62c07d9063c149
