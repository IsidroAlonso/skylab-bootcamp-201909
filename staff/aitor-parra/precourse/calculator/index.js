/*Calculator!
Haz una calculadora. Un único programa al que le pasarás dos parámetros y el usuario podrá visualizar por consola la suma, resta, multiplicación y división entre ambos números. El resultado debería ser mostrado con 3 decimales como mucho (En caso de que hubieran). El programa debe contemplar e informar al usuario en el caso de que este introduzca cualquier cosa que no sean números.
Si el usuario introduce un solo número, deberá mostrar SOLO su raíz cuadrada, si vuelve a introducir los dos, volverá a mostrar las 4 operaciones de siempre.
Los resultados deberían almacenarse dentro de una array y mostrarlos de una forma amigable al usuario.
// Output
results = [num1 + num2 = resultSum, num1 - num2 = resultRest, ...]*/


function calC(num1, num2){
 
  // Convierto los argumentos num1 y num 2 del prompt a tipo numérico
  
   num1 = Number(prompt("Por favor, introduzca el primer número."));
   num2 = Number(prompt("Por favor, introduzca el segundo número."));
  
  
  // Declaro el array 'arrResult'
  
  var arrResult = [];
    
  // Condicional para discriminar si los valores 'num1' o 'num2' són number o string.
  
  if (isNaN(num1) || isNaN(num2)) {
      return alert("Sólo puedo calcular números!");
    
  } else if (num1 == false && num2 == false ) {
   
      alert("No hay números que calcular!") 
  
  
  } else if (num2 == false ) {
         
    
        if (!Number.isInteger(Math.sqrt(num1))) {
        
          alert("La raíz cuadrada de " + num1 + " es " + Math.sqrt(num1).toFixed(3));
        } else {
          alert("La raíz cuadrada de " + num1 + " es " + Math.sqrt(num1));
        }
          
  } else if (num1 == false ) {
        
    
    if (!Number.isInteger(Math.sqrt(num2))) {
        
          alert("La raíz cuadrada de " + num2 + " es " + Math.sqrt(num2).toFixed(3));
        } else {
          alert("La raíz cuadrada de " + num2 + " es " + Math.sqrt(num2));}
        
  } else {
      
  // Introduzco las funciones que nos calcularan los resultados.
      
    var suma = function(num1, num2){return num1 + num2;};
    
    var resta = function(num1, num2){return num1 - num2;};
    
    var multi = function(num1, num2){return num1 * num2;};
        
    var divide = function(num1, num2){return num1 / num2;};
  
  // Añado los valores de las 4 funciones al array 'arrResult'.
      
  arrResult[0] = suma(num1, num2); 
   arrResult[1] = resta(num1, num2);
      arrResult[2] = multi(num1, num2);
       arrResult[3] = divide(num1, num2);
  
  // Condicional para limitar decimales a 3 si los hay.
  
  if (!Number.isInteger(arrResult[0]))
    {arrResult[0] = (suma(num1, num2)).toFixed(3)} 
      
  if  (!Number.isInteger(arrResult[1]))
    {arrResult[1] = (resta(num1, num2)).toFixed(3)} 
      
  if  (!Number.isInteger(arrResult[2]))
    {arrResult[2] = (multi(num1, num2)).toFixed(3)} 
      
  if  (!Number.isInteger(arrResult[3]))
    {arrResult[3] = (divide(num1, num2)).toFixed(3)} 
  
  // Output final de los valores acumulados en el array 'arrResult' con o sin decimales.
  
  alert(
  num1 + "+" + num2 + " = " + arrResult[0] + "\n" + 
  num1 + "-" + num2 + " = " + arrResult[1] + "\n" + 
  num1 + "*" + num2 + " = " + arrResult[2] + "\n" + 
  num1 + "/" + num2 + " = " + arrResult[3] );
  
  
  
    }}

