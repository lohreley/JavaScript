function login() {
    var usuario = prompt('Ingrese el usuario');
    var password = prompt('Ingrese contraseña');
    var soyRobot = confirm('Soy un robot?');
    const user = 'usuario';
    const pass = 'contraseña';
    if (usuario == user && password == pass && !soyRobot) {
        alert('usuario y contraseña correcta');
    } else {
        alert('usuario o contraseña incorrecta');
    }
}

function ingresar() {
    var mayor = prompt('Ingrese edad:');
    var remera = prompt('Ingrese color de remera');
    if (Number(mayor) >= 18 && remera == 'roja') {
        alert('Puede ingresar');
    } else {
        alert('No puede ingresar');
    }
}

function notas() {
    var nota1 = Number(prompt('Ingrese primer nota'));
    var nota2 = Number(prompt('Ingrese segunda nota'));
    var prom = (nota1 + nota2) / 2;
    if (nota1 > 7 && nota2 > 7 && prom > 7) {
        alert('Materia aprobada');
    } else {
        alert('Materia desaprobada');
    }

}