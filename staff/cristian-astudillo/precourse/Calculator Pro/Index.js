//CALCULADORA

/* Haz una calculadora. Un único programa al que le pasarás dos parámetros y el usuario podrá visualizar por consola la suma, resta, multiplicación y división entre ambos números. 
- El resultado debería ser mostrado con 3 decimales como mucho (En caso de que hubieran). 
- El programa debe contemplar e informar al usuario en el caso de que este introduzca cualquier cosa que no sean números.
- Si el usuario introduce un solo número, deberá mostrar SOLO su raíz cuadrada, si vuelve a introducir los dos, volverá a mostrar las 4 operaciones de siempre.
- Los resultados deberían almacenarse dentro de una array y mostrarlos de una forma amigable al usuario.
 */

 //CALCULADORA PRO
// REALIZAR OPERACIONES SEAN CUALES SEAN EL NÚMERO DE ARGUMENTOS PASADOS A LA FUNCIÓN.

    // MÉTODO CONFIRM(PREGUNTA SI EL USUARIO DESEA CONTINUAR).
    function continuar(){ 
        var continuar1 = confirm('Quieres Seguir?')
            if(continuar1){                  
                insert();                          
            } else {
            return alert('Hasta Luego...!!');                        
        }
    } 

    //REDONDEAR NÚMEROS.
    function redondear(num1){

        //MATH.ROUND PARA REDONDEAR MÁXIMO 3 DECIMALES EN CASO DE QUE HUBIERAN.
        return Math.round(num1 * 1000) / 1000;  

    }


    //NÚMERO DE ARGUMENTOS PASADOS A LA FUNCIÓN.
    function operaciones(...num) {    

        const suma = num.reduce((a,b) => (+a) + (+b));//SE AÑADE SÍMBOLO + PARA EVITAR CONCATENACIÓN.           
        const resta = num.reduce((a,b) =>  a - b);
        const multiplicacion = num.reduce((a,b) => a * b);
        const division = num.reduce((a,b) => a / b);              
            
        return [`SUMA = ${suma},   RESTA = ${resta},   MULTIPLICACIÓN = ${multiplicacion},   DIVISIÓN = ${redondear(division)}`];   

    }   
    
    //alert(operaciones(1,1));   
    console.log(operaciones(1,1));   

    
    //PREGUNTAR AL USUARIO SE DESEA VOLVER A REALIZAR OTRA OPERACIÓN, UNA VEZ DE HACER TODAS LA OPERACIONES.
    function insert(){
        //MÉTODOS PROMPT Y ALERT.   
        var num1 = prompt('Por favor, introduce un mínimo de 2 números');           
        parseInt(num1);       
        num1 = num1.split(',');

        if(num1[0] === null || num1[0] === ''){
            return alert('Adiós!!'); 
        } 
         
         if(isNaN(num1[0])){           
            alert('No es(son) un número(s)...inténtalo otra vez.');
            num1 = prompt('Por Favor, INTRODUCE un mínimo de 2 NÚMEROS');

            if(num1[0] === null||num1[0] === '' || isNaN(num1[0])){

                 //MÉTODO CONFIRM(PREGUNTA SI EL USUARIO DESEA CONTINUAR).     
                continuar();
                return alert('Adiós!!');    
                    } else if(num1.length > 1){
                        parseInt(num1);       
                            num1 = num1.split(',');          
                    }

        }
            
        if(num1.length === 1){
            alert('La raiz cuadrada es ' + Math.round(Math.sqrt(num1) *100)/100);          

        }

        if(num1.length > 1){
            alert(operaciones(...num1));
        }

         //MÉTODO CONFIRM(PREGUNTA SI EL USUARIO DESEA CONTINUAR).     
        continuar();

    }

    insert();   
    
    


    
    

    