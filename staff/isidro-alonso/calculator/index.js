// calculadora 

const errormsg = '¡Error! No has introducido valores númericos o los campos están vacíos';

function suma(num1,num2) {
    return parseFloat((Number(num1)+Number(num2)).toFixed(3));
}

function resta(num1,num2) {
    return parseFloat((num1-num2).toFixed(3));
}

function multiplicacion(num1,num2) {
    return parseFloat((num1*num2).toFixed(3));
}

function division(num1,num2) {
    return parseFloat((num1/num2).toFixed(3));
}

function raizCuadrada(num1) {
    return parseFloat(Math.sqrt(num1).toFixed(3));
}

function calculator(num1,num2) {   
    num1 = prompt('Calculadora\nIntroduce el primer número a operar');
    num2 = prompt('Introduce el segundo número a operar\nSi se deja en blanco, realizará la raiz cuadrada del primer número');
    if (isNaN(num1) || isNaN(num2) || num1 == '' || num1 == ' '){
        alert(errormsg);
    }
    else if (num2 == '' ||  num2 == ' ') {
        alert(
        `La raiz cuadrada de ${num1} es `+ raizCuadrada(num1));
    }
    else if (num2 == 0) {
        alert(
        `${num1} + ${num2} = `+ suma(num1,num2)+'\n'+
        `${num1} - ${num2} = `+ resta(num1,num2)+'\n'+
        `${num1} * ${num2} = `+ multiplicacion(num1,num2)+'\n'+
        'No se puede dividir por 0');
    }
    else {
        alert(
        `${num1} + ${num2} = `+ suma(num1,num2)+'\n'+
        `${num1} - ${num2} = `+ resta(num1,num2)+'\n'+
        `${num1} * ${num2} = `+ multiplicacion(num1,num2)+'\n'+
        `${num1} / ${num2} = `+ division(num1,num2));
    }
}

calculator();

/*
// calculadora versión 1

const errormsg = '¡Error! No has introducido uno o varios valores númericos o los campos están vacíos (o has dividido por cero)';

const calculator = (num1,operation,num2) => {       
    if(typeof num1 === 'number' && typeof num2 === 'number') { // si escribes texto que no sean nums o no rellenas los campos saldrá el mensaje de error
        switch (operation) {
            case '+':
                return parseFloat((num1+num2).toFixed(3));
            case '-':
                return parseFloat((num1-num2).toFixed(3));
            case '*':
                return parseFloat((num1*num2).toFixed(3));
            case '/':
                if(num1 !== 0 && num2 !== 0){ // el resultado de la división por 0 es infinito, por lo que si se pone 0 en uno de los dos valores saldrá el mensaje de error
                    return parseFloat((num1/num2).toFixed(3));
                }
                break;
        }
    }
    else if(typeof num1 === 'number' && num2 === undefined && operation === undefined) { // hace la raiz cuadrada cuando solo has rellenado el primer campo
                    return parseFloat(Math.sqrt(a).toFixed(3));
                }
    return errormsg;
};

calculator(); // cambiar valores aquí para comprobar si funciona

// calculadora versión 2

function isNumber(a,b) {
    return typeof a === 'number' || typeof b === 'number';
}

function suma(a,b) {
    return parseFloat((a+b).toFixed(3));
}

function resta(a,b) {
    return parseFloat((a-b).toFixed(3));
}

function multiplicacion(a,b) {
    return parseFloat((a*b).toFixed(3));
}

function division(a,b) {
    const isDivisible = a !== 0 && b !== 0;
    return isDivisible ? parseFloat((a/b).toFixed(3)) : errormsg;
}

function raizCuadrada(a) {
    return parseFloat(Math.sqrt(a).toFixed(3));
}

function calculator2 (a,operator,b) {
    const isCorrect = isNumber(a) && isNumber(b);
    if (isCorrect){
        switch (operator) {
            case '+':
                return suma(a,b);
            case '-':
                return resta(a,b);
            case '*':
                return multiplicacion(a,b);
            case '/':
                return division(a,b);
        }
    }
    if (operator === undefined && typeof a === 'number' && b === undefined){
        return raizCuadrada(a);
    };
    return errormsg;
}

calculator2(9,'r');
*/