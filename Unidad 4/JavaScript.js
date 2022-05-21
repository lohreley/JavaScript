//Realiza un programa para obtener el menor de 2 números ingresados

function menor(num1, num2) {
    if (num1 <= num2) {
        console.log("El menor es " + num1);

    } else {
        console.log("El menor es " + num2);

    }
}

//par o impar

function parImpar(num) {
    if (num % 2 == 0) {
        console.log("El numero es par");

    } else {
        console.log("El numero es impar");

    }
}

/*Declarar una variable que se llame ganeLaCarrera y asignarle el valor 
false. Mostrar por la terminal un mensaje que diga 'Ganaste' si 
ganeLaCarrera es verdadero y 'Perdiste' si su valor es falso.*/

function carrera(gane) {
    let ganeLaCarrera = gane;
    if (ganeLaCarrera) {
        console.log("Ganaste");
    } else {
        console.log("Perdiste");

    }
}

/*Declarar una variable que se llame posicionEnLaCarrera y asignarle el número 6. 
                Mostrar por la consola uno de los siguientes mensajes según la posición que salió el corredor: */

function carrera(pos) {
    let posicionEnLaCarrera = pos;
    switch (posicionEnLaCarrera) {
        case 1:
            console.log("FELICITACIONES, SALISTE 1RO");
            break;

        case 2:
            console.log("Te falto poquito para ganar");
            break;

        case 3:
            console.log("Sos un orgullo para tu familia");
            break;

        default:
            if (posicionEnLaCarrera > 3) {
                console.log("Volvé a tu casa");

            } else {
                console.log("No tires fruta");

            }
    }

}
/*
Realizar un programa que calcule el importe total a abonar en una factura, 
teniendo en cuenta que si el importe total supera los 1000$ se aplica un descuento del 20%.*/

function factura(total) {
    if (total > 1000) {
        console.log("El total de la factura es de: " + (total - (total * 20 / 100)));

    } else {
        console.log("El total de la factura es de: " + total);

    }
}

/*Hacer un programa para obtener las comisiones por ventas de un vendedor. 
Los datos que se ingresan son monto vendido y código de vendedor Si el código 
de vendedor es menor a 100 las comisiones son de un 30%, si el código esta entre 100 y 200
son del 20% y si es mayor a 200 10%. Mostrar el código de vendedor, el monto 
vendido y el valor de las comisiones. */

function comisiones(montoVendido, codVendedor) {
    if (codVendedor <= 100) {
        console.log("El vendedor cod " + codVendedor + " tiene ventas por $" + montoVendido + " y su comision es de " + (montoVendido * 30 / 100));
    } else if (codVendedor > 100 && codVendedor <= 200) {
        console.log("El vendedor cod " + codVendedor + " tiene ventas por $" + montoVendido + " y su comision es de " + (montoVendido * 20 / 100));
    } else if (codVendedor > 200) {
        console.log("El vendedor cod " + codVendedor + " tiene ventas por $" + montoVendido + " y su comision es de " + (montoVendido * 10 / 100));
    }

}

/*Se desea escribir los nombres de los días de la semana en función de la variable d 
(día) introducida por teclado. 1(Lunes) – 2(martes) – 3(Miércoles)……..6(Sábado) – 7(Domingo) */

function dias() {
    let dia = prompt('Escribi un dia de la semana: ');
    document.write('El dia que escribiste es: ' + dia);
}

/*Hacer un programa que calcule el pago que hacen un grupo de personas para ver una película 
teniendo en cuenta que si el grupo es menor de 8 personas el pago es de 1.5 pesos por 
persona y para grupos de 8 personas o más el pago es 0.5 pesos
por persona. */

function pelicula(personas) {
    let precio = 0;
    if (personas >= 1 && personas < 8) {
        precio = personas * 1.5;
        console.log("El precio a abonar es: " + precio);
    } else if (personas >= 8) {
        precio = personas * 0.5;
        console.log("El precio a abonar es: " + precio);
    }
}

/*Una farmacia hace el 15% de descuento a sus clientes si la compra es mayor a 100 pesos. 
Escribir un programa que dado el monto de una compra como valor numérico, diga cuanto 
debe abonar el cliente aplicando el descuento si es necesario. */

function farmacia(compra) {
    if (compra < 100) {
        console.log("El cliente debe abonar: " + compra);
    } else if (compra >= 100) {
        console.log("El cliente debe abonar: " + (compra - (compra * 15 / 100)));
    }
}