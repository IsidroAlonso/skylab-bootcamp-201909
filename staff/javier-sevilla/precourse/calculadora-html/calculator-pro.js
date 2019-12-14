// Declaraciones variables globales y funciones

let num1;
let num2;
let noFin = true;
let noFinPar = true;
let tablaResultado = [];
let muestraResultado = [];
let numTabla = [];
let i = 0;
let result = '';
let num = 0;
let numPar = 0;


function calcular(numParametros, tabla) {  
    console.log(tabla[0]);
    console.log(tabla[1]);
    console.log(tabla[2]);
    let j;
    for (j = 0; j < numParametros; j++) {
        if (j == 0) {
            tablaResultado[0] = tabla[j];
            tablaResultado[1] = tabla[j];
            tablaResultado[2] = tabla[j];
            tablaResultado[3] = tabla[j];
        } else {
            tablaResultado[0] = tablaResultado[0] + tabla[j]; 
            tablaResultado[1] = tablaResultado[1] - tabla[j]; 
            tablaResultado[2] = tablaResultado[2] * tabla[j]; 
            tablaResultado[3] = parseFloat(tablaResultado[3] / tabla[j]).toFixed(3); 
        }
    }
    return tablaResultado;
}  

noFin = true;
do {
   noFinPar = true;
   i = 0
   numTabla = []; 
   do {          
       num = parseFloat(prompt('INTRODUZCA ' + (i + 1) + ' Nº'));
       if (isNaN(num)) {
           if (i === 0) {
               numTabla[i] = num;   
            }
            noFinPar = false;
        } else {
            numTabla[i] = num;
            i = i  + 1;    
        }
    } while (noFinPar);

    numPar = i;

    if (isNaN(numTabla[0])) {
        console.log('Debe introducir como mínimo un numero')
     } else if (isNaN(numTabla[1])) {
             tablaResultado[0] = parseFloat(Math.sqrt(numTabla[0]).toFixed(3));
             console.log('La raiz cuadrada del Nº 1 es de: ' + tablaResultado[0])
     } else {
        calcular(numPar, numTabla);
        muestraResultado[0] = 'La suma es de:  ' + tablaResultado[0];
        muestraResultado[1] = 'La resta es de:  ' + tablaResultado[1];
        muestraResultado[2] = 'La multiplicación es de:  ' + tablaResultado[2];
        muestraResultado[3] = 'La división es de:  ' + tablaResultado[3];
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

} while(noFin);

  







