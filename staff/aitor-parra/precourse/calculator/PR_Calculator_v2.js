/*Calculator! ➗➕
Haz una calculadora. Un único programa al que le pasarás dos parámetros y el usuario podrá visualizar por consola la suma, resta, multiplicación y división entre ambos números. El resultado debería ser mostrado con 3 decimales como mucho (En caso de que hubieran). El programa debe contemplar e informar al usuario en el caso de que este introduzca cualquier cosa que no sean números.
Si el usuario introduce un solo número, deberá mostrar SOLO su raíz cuadrada, si vuelve a introducir los dos, volverá a mostrar las 4 operaciones de siempre.
Los resultados deberían almacenarse dentro de una array y mostrarlos de una forma amigable al usuario.
// Output
results = [num1 + num2 = resultSum, num1 - num2 = resultRest, ...]*/

var num1 = 4.89;

var num2 = 7.93;

var arrayResultat = [];


function suma(num1, num2){
    return num1 + num2;}

function resta(num1, num2){
    return num1 - num2;}

function multi(num1, num2){
    return num1 * num2;}
    
function divide(num1, num2){
    return num1 / num2;}

if (isNaN(num1) && isNaN(num2)) {
    console.log("Input only numbers! :)");
 
} else if (num2 == null ) {
    console.log(Math.sqrt(num1).toFixed(3)), 
      arrayResultat.push(Math.sqrt(num1))
 
} else if (num1 == null ) {
    console.log(Math.sqrt(num2).toFixed(3)),
      arrayResultat.push(Math.sqrt(num2))

} else {
    arrayResultat.push(suma(num1, num2).toFixed(3)),
      arrayResultat.push(resta(num1, num2).toFixed(3)),
        arrayResultat.push(multi(num1, num2).toFixed(3)), 
          arrayResultat.push(divide(num1, num2).toFixed(3));
    
  console.log("Suma: " + arrayResultat[0] + "\n" + " Resta: " + arrayResultat[1] + "\n" + " Multi: " + arrayResultat[2] + "\n" + " Divide: " +  arrayResultat[3]);
  
}

console.log(arrayResultat) 


