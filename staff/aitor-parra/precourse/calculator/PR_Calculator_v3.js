/*Calculator!
Haz una calculadora. Un único programa al que le pasarás dos parámetros y el usuario podrá visualizar por consola la suma, resta, multiplicación y división entre ambos números. El resultado debería ser mostrado con 3 decimales como mucho (En caso de que hubieran). El programa debe contemplar e informar al usuario en el caso de que este introduzca cualquier cosa que no sean números.
Si el usuario introduce un solo número, deberá mostrar SOLO su raíz cuadrada, si vuelve a introducir los dos, volverá a mostrar las 4 operaciones de siempre.
Los resultados deberían almacenarse dentro de una array y mostrarlos de una forma amigable al usuario.
// Output
results = [num1 + num2 = resultSum, num1 - num2 = resultRest, ...]*/

/*Hola @aitor1979 ,
En lo que comentas que no puedes juntar las funciones que hacen los cálculos sobre una el pranteamiento sería el siguiente:

Declara la función calculator:
function calculator() { }
Y dentro ella tienes que pedir (por prompt) los dos números a utilizar hacer hacer los cálculos. Cuando tienes esos número haces las operaciones (llamas a las funciones que ya tienes) pasándole esos números. Y por último muestras por pantalla (console.log) el resultado de todos los cálculos.

Para ejecutar esta función que calcula ya está bien que como la invocas:
calculator();

Un saludo!


*/

function calculator(num1, num2){
 
    //num1 = prompt("Por favor, introduzca el primer número")
    //num2 = prompt("Por favor, introduzca el segundo número")
    
    
    if (isNaN(num1) && isNaN(num2)) {
        console.log("Introduzca sólo números, gracias.");
     
    } else if (num2 == null ) {
        console.log("La raíz cuadrada de " + num1 + " es " + Math.sqrt(num1).toFixed(3)), 
          arrResult.push(Math.sqrt(num1))
     
    } else if (num1 == null ) {
        console.log("La raíz cuadrada de " + num2 + " es " + Math.sqrt(num2).toFixed(3)),
          arrResult.push(Math.sqrt(num2))
    
    } else {
    var suma = function(num1, num2){
        return num1 + num2;};
    
    var resta = function(num1, num2){
        return num1 - num2;};
    
    var multi = function(num1, num2){
        return num1 * num2;};
        
    var divide = function(num1, num2){
        return num1 / num2;};
      
    var arrResult = [];
      
        arrResult[0] = suma(num1, num2).toFixed(3),
          arrResult[1] = resta(num1, num2).toFixed(3),
            arrResult[2] = multi(num1, num2).toFixed(3), 
              arrResult[3] = divide(num1, num2).toFixed(3);
        
      console.log(" Suma: " + num1 + "+" + num2 + " = " + arrResult[0] + "\n" + 
                  " Resta: " + num1 + "-" + num2 + " = "+ arrResult[1] + "\n" + 
                  " Multiplicación: " + num1 + "*" + num2 + " = " + arrResult[2] + "\n" + 
                  " División: " + num1 + "/" + num2 + " = "+  arrResult[3]);
      
    }
    }
    
    calculator()
