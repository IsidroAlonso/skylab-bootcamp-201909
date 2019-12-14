//CALCULADORA

/* Haz una calculadora. Un único programa al que le pasarás dos parámetros y el usuario podrá visualizar por consola la suma, resta, multiplicación y división entre ambos números. 
- El resultado debería ser mostrado con 3 decimales como mucho (En caso de que hubieran). 
- El programa debe contemplar e informar al usuario en el caso de que este introduzca cualquier cosa que no sean números.
- Si el usuario introduce un solo número, deberá mostrar SOLO su raíz cuadrada, si vuelve a introducir los dos, volverá a mostrar las 4 operaciones de siempre.
- Los resultados deberían almacenarse dentro de una array y mostrarlos de una forma amigable al usuario.
 */


//MATH.ROUND PARA REDONDEAR MÁXIMO 3 DECIMALES EN CASO DE QUE HUBIERAN.
function redondear(num){
    return Math.round(num * 100) / 100;
}

function calculadora(num1, num2){
    let resultados = [];   

        // SE USA PARSEFLOAT PARA CONVERTIR LOS NÚMEROS A DECIMALES.
        var n1 = parseFloat(num1); 
        var n2 = parseFloat(num2);      
        
        // SUMA, RESTA, MULTIPLICACIÓN Y DIVISIÓN ASIGNADAS EN EL ARRAY "OPERACIONES".
        let operaciones = [n1 + n2, n1-n2 ,n1 * n2, n1 / n2];  

        if(!isNaN(num1) && typeof num2 === 'undefined'){

            // MATH.SQRT PARA MOSTRAR RAIZ CUADRADA Y MATH.ROUND PARA MOSTRAR MÁXIMO 3 DECIMALES.
            console.log('La raiz cuadrada es ' + Math.round(Math.sqrt(num1) * 100)/100); 
                    
            } else if (isNaN(num1 || num2)){
                console.log('...No es(son) número(s)...Por favor, introduzca el/los valor(es) correspondiente(s) para ejecutar la(s) operacion(es).');   
                
                } else {
                    let total1 = 'Los resultados son :' + ' suma = ' + redondear(operaciones[0])  + ',' + ' resta = ' + redondear(operaciones[1]) + ',' + ' multiplicación = ' + redondear(operaciones[2]) + ', ' +  'división = ' +  redondear(operaciones[3]);
                    resultados.push(total1);
                    console.log(resultados);                 
        }         
           
    }    

calculadora(4,5);
    
 
        
           