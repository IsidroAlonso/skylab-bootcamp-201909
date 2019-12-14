// Declaraciones variables globales y funciones

let num1;
let num2;
let noFin = true;
let tablaResultado = [];
let muestraResultado = [];

function calcular(n1, n2) {    
    tablaResultado[0] = n1 + n2;
    tablaResultado[1] = n1 - n2;
    tablaResultado[2] = n1 * n2;
    tablaResultado[3] = n1 / n2;
    return  tablaResultado;   
}

do {
   //Empieza el proceso
   // Se pide los numeros de entrada
   num1 = prompt('INTRODUZCA 1er Nº');
   num2 = prompt('INTRODUZCA 2º Nº o dejelo en blanco para recuperar la raiz cuadrada del 1er Nº introducido');

   //se valida la entrada mediante parseFloat(lo que quiero es descartar 
   //decimales y caracteres no numericos)
   num1 = parseFloat(num1);
   num2 = parseFloat(num2);

   if (isNaN(num1) && isNaN(num2)) {
       console.log('Debe introducir como mínimo un numero')
    } else if (!isNaN(num1) && isNaN(num2)) {
            tablaResultado[0] = parseFloat(Math.sqrt(num1).toFixed(3));
            console.log('La raiz cuadrada del Nº 1 es de: ' + tablaResultado[0])
    } else if (isNaN(num1) && !isNaN(num2)) {
           tablaResultado[0] = parseFloat(Math.sqrt(num2).toFixed(3));
           console.log('La raiz cuadrada del Nº 2 es de: ' + tablaResultado[0])
    } else {
       calcular(num1, num2);
       muestraResultado[0] = 'Nº1 + Nº2 = ' + tablaResultado[0];
       muestraResultado[1] = 'Nº1 - Nº2 = ' + tablaResultado[1];
       muestraResultado[2] = 'Nº1 * Nº2 = ' + tablaResultado[2];
       muestraResultado[3] = 'Nº1 / Nº2 = ' + tablaResultado[3];
       console.log(muestraResultado);
    }

    switch (prompt("New numbers? y/n")) {
       case 'y': 
          'Hola';
           break;
       default: 
           noFin = false
           break;       
    }

} while (noFin);