function decimales(numero1) {
    return Math.round(numero1 * 100) / 100; //Usar Math.round para mostrar 3 decimales.
}

function calculator(numero1, numero2) {
    var numero1 = parseFloat(prompt('Por favor, introduce un numero'));//Utilizamos parseFloat para que nos devuelva un numero decimal.
    var numero2 = parseFloat(prompt('Por favor, introduce un numero'));// Dentro del parseFloat introducimos prompt, para que el usuario pueda introducir los numeros.
    let op = [numero1+numero2, numero1-numero2, numero1*numero2, numero1/numero2];
    if (!isNaN(numero1) && isNaN(numero2)) {
        console.log('La raiz cuadrada del numero introducido es: ' + decimales(Math.sqrt(numero1))); // Introducimos "decimales" para limitar los decimales producidos por Math.sqrt., que es utilizado para proporcionar la raíz cuadrada del numero.
    } else {
        let resultados = 'El resultado de suma es = ' + op[0] + '\nEl resultado de la resta es = ' + op[1] + '\nEl resultado de la multiplicación es = ' + op[2] + '\nEl resultado de la división es = ' + op[3];
        console.log(resultados);
    }
}

do {
    calculator();
    var repetir = prompt('¿Quieres realizar otra operación?');
}
while (repetir == 'si');//Utilizamos un do...while para repetir, si es lo que el usuario quiere.