/*Calculator! ➗➕
Haz una calculadora. Un único programa al que le pasarás dos parámetros y el usuario podrá visualizar por consola la suma, resta, multiplicación y división entre ambos números. El resultado debería ser mostrado con 3 decimales como mucho (En caso de que hubieran). El programa debe contemplar e informar al usuario en el caso de que este introduzca cualquier cosa que no sean números.
Si el usuario introduce un solo número, deberá mostrar SOLO su raíz cuadrada, si vuelve a introducir los dos, volverá a mostrar las 4 operaciones de siempre.
Los resultados deberían almacenarse dentro de una array y mostrarlos de una forma amigable al usuario.
// Output
results = [num1 + num2 = resultSum, num1 - num2 = resultRest, ...]*/

function calculator(num1, num2){
  
  if (isNaN(num1) || isNaN(num2)) {
    return "Input only numbers! :)";
  } else {
  function suma(num1, num2){
    const sumaT = num1 + num2;
    return sumaT;}
    
  function resta(num1, num2){
    const restaT = num1 - num2;
    return restaT;}
    
  function multiT(num1, num2){
    const multiT = num1 * num2;
    return multiT;}
    
  function divideT(num1, num2){
    const divideT = num1 / num2;
    return divideT;}
return;
}}
  
calculator(34, 56)