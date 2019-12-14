function inicio () {

    // 1. DEFINIMOS VARIABLES

    let operands = []; // contiene todas las cifras con las que queremos operar. 
    let operations = []; // contiene todos los operadores que introducimos.
    let lastButtonPressed = ""; /* Lo definiremos como "number" is la última tecla pulsada es un número, 
                                Lo definiremos como "operator" si la última tecla pulsada era un operador. */
   
        // le damos nombre a los botones creados en el html.
    let pantallaResult = document.getElementById("resultados");
    let boton1 = document.getElementById("1");
    let boton2 = document.getElementById("2");
    let boton3 = document.getElementById("3");
    let boton4 = document.getElementById("4");
    let boton5= document.getElementById("5");
    let boton6= document.getElementById("6");
    let boton7 = document.getElementById("7");
    let boton8 = document.getElementById("8");
    let boton9 = document.getElementById("9");
    let boton0 = document.getElementById("cero");
    let botonAC = document.getElementById("AC");
    let botonDelete = document.getElementById("delete");
    let botonDividir = document.getElementById("dividir");
    let botonMulti = document.getElementById("multiplicar");
    let botonRestar = document.getElementById("restar");
    let botonSumar = document.getElementById("sumar");
    let botonDecimal = document.getElementById("dot");
    let botonIgual = document.getElementById("igual");

    
    // 2. Acciones cuando un NÚMERO es presionado. 
    boton1.onclick = function() {
        if (lastButtonPressed == "equal") {
            pantallaResult.textContent = "";
        } // Si lo pulsamos después de =, no hacemos nada, solo limpiamos la pantalla. 
        pantallaResult.textContent = pantallaResult.textContent + "1"; // Si no, mostramos el número en pantalla.
        lastButtonPressed = "number"; // definimos lastbuttonPressed como "number".
    }
    boton2.onclick = function() {
        if (lastButtonPressed == "equal") {
            pantallaResult.textContent = "";
        }
        pantallaResult.textContent = pantallaResult.textContent + "2";
        lastButtonPressed = "number";
    }
    boton3.onclick = function() {
        if (lastButtonPressed == "equal") {
            pantallaResult.textContent = "";
        }
        pantallaResult.textContent = pantallaResult.textContent + "3";
        lastButtonPressed = "number";
    }
    boton4.onclick = function() {
        if (lastButtonPressed == "equal") {
            pantallaResult.textContent = "";
        }
        pantallaResult.textContent = pantallaResult.textContent + "4";
        lastButtonPressed = "number";
    }
    boton5.onclick = function() {
        if (lastButtonPressed == "equal") {
            pantallaResult.textContent = "";
        }
        pantallaResult.textContent = pantallaResult.textContent + "5";
        lastButtonPressed = "number";
    }
    boton6.onclick = function() {
        if (lastButtonPressed == "equal") {
            pantallaResult.textContent = "";
        }
        pantallaResult.textContent = pantallaResult.textContent + "6";
        lastButtonPressed = "number";
    }
    boton7.onclick = function() {
        if (lastButtonPressed == "equal") {
            pantallaResult.textContent = "";
        }
        pantallaResult.textContent = pantallaResult.textContent + "7";
        lastButtonPressed = "number";
    }
    boton8.onclick = function() {
        if (lastButtonPressed == "equal") {
            pantallaResult.textContent = "";
        }
        pantallaResult.textContent = pantallaResult.textContent + "8";
        lastButtonPressed = "number";
    }
    boton9.onclick = function() {
        if (lastButtonPressed == "equal") {
            pantallaResult.textContent = "";
        }
        pantallaResult.textContent = pantallaResult.textContent + "9";
        lastButtonPressed = "number";
    }
    boton0.onclick = function() {
        if (lastButtonPressed == "equal") {
            pantallaResult.textContent = "";
        }
        pantallaResult.textContent = pantallaResult.textContent + "0";
        lastButtonPressed = "number";
    }
    botonDecimal.onclick = function() {
        if (lastButtonPressed == "equal") {
            pantallaResult.textContent = "";
        }
        pantallaResult.textContent = pantallaResult.textContent + ".";
        lastButtonPressed = "number";
    }
    
    // 3. Acciones cuando un boton de OPERACIONES es presionado.
        
    
    botonAC.onclick = function() { // La función de AC es resetear todo y liampiar la pantalla.
        pantallaResult.textContent = ""; // Limpiamos pantalla.
        operands.length = 0; // Reseteamos el array de cifras (operands)
        operations.length = 0; // Reseteamos el array de operaciones (operations)
    }


    botonDelete.onclick = function() { //La función de CE (delete) es eliminar el último boton pulsado y su acción.  
        if (lastButtonPressed == "equal") { // si el último boton és =, limpiamos pantalla. 
            pantallaResult.textContent = "";
        } 
        switch (lastButtonPressed) {
            case "number": // si el último boton es un número, eliminamos el número de la pantalla. 
                pantallaResult.textContent = pantallaResult.textContent.slice(0,-1);
                break; 
            case "operator": // si el último boton es un operador..
                operations.pop(); //  eliminamos el operador del array de operations.
                pantallaResult.textContent = operands.pop(); // mostramos en pantalla el último número añadido en los operandos.
                lastButtonPressed = "number"; // asignamos number a el último boton pulsado. 
                break;
        }
    }

    botonDividir.onclick = function() {
        if (lastButtonPressed !== "operator") { // si el último boton era un número...
            operands.push(pantallaResult.textContent); // añadimos la cifra completa al array operands. 
            operations.push("/"); // añadimos la operacion al array operations. 
            pantallaResult.textContent = ""; // ponemos la pantalla en blanco. 
            lastButtonPressed = "operator"; // cambiamos lastbutton a operator. 
        } else if (lastButtonPressed == "equal") {
            operands.push(result);
            operations.push("/");
            pantallaResult.textContent = "";
            lastButtonPressed = "operator";
        }
    }
    botonMulti.onclick = function() {
        if (lastButtonPressed !== "operator") {
            operands.push(pantallaResult.textContent);
            operations.push("x");
            pantallaResult.textContent = "";
            lastButtonPressed = "operator";
        } else if (lastButtonPressed == "equal") {
            operands.push(result);
            operations.push("x");
            pantallaResult.textContent = "";
            lastButtonPressed = "operator";
        }
    }
    botonRestar.onclick = function() {
    
        if (lastButtonPressed !== "operator") {
            operands.push(pantallaResult.textContent);
            operations.push("-");
            pantallaResult.textContent = "";
            lastButtonPressed = "operator";
        } else if (lastButtonPressed == "equal") {
            operands.push(result);
            operations.push("/");
            pantallaResult.textContent = "";
            lastButtonPressed = "operator";
        }
    }
    botonSumar.onclick = function() {
        
        if (lastButtonPressed !== "operator") {
            operands.push(pantallaResult.textContent);
            operations.push("+");
            pantallaResult.textContent = "";
            lastButtonPressed = "operator";
        } else if (lastButtonPressed == "equal") {
            operands.push(result);
            operations.push("/");
            pantallaResult.textContent = "";
            lastButtonPressed = "operator";
        }
    }

    // 4. Al clickar =, lleva a cabo todas las operaciones con los correspondientes operandos. 
    botonIgual.onclick = function() {
        if (lastButtonPressed !== "operator") { // si el último boton es un número...
            operands.push(pantallaResult.textContent); // añadimos cifra en pantalla a operandos array. 
        }
        operations.push("="); // añadimos = al array de operations. 
        lastButtonPressed = "equal"; // último boton es "equal"

        let result = 0; // variable para el resultado de las operaciones
        console.log(operands)
        console.log(operations)
        if (operands.length) { // si el array de operandos (cifras) contiene algo...
            console.log(operations.length)
            for (let i=0; i<operations.length; i++){ //recorremos el array de las operaciones
                console.log(operations[i])
                if (i == 0) { // para la primera operacion / iteración
                    switch (operations[i]){
                        case "/":
                            result = Number(operands[i]) / Number(operands[i+1]); /* el resultado es la primera cifra, dividida 
                            por la segunda cifra...*/
                            break;
                        case "x":
                            result = Number(operands[i]) * Number(operands[i+1]); // ""
                            break;
                        case "-":
                            result = Number(operands[i]) - Number(operands[i+1]); // ""
                            break;
                        case "+":
                            result = Number(operands[i]) + Number(operands[i+1]); // ""
                            break;
                        case "=":
                            result = Number(operands[i]); // en este caso, no realizamos operación, aquí siempre dará 0. 
                    }
                } else { // para las demás operaciones / iteraciones
                    switch (operations[i]){
                        case "/":
                            result = result / Number(operands[i+1]); /* resultado será el resultado que tenemos de la primera 
                            iteración, dividido por el siguiente operando o cifra*/
                            break;
                        case "x":
                            result = result * Number(operands[i+1]); // ""
                            break;
                        case "-":
                            result = result - Number(operands[i+1]); // ""
                            break;
                        case "+":
                            result = result + Number(operands[i+1]); //""
                            break;
                        case "=":
                            break; // si pulsamos igual, salimos del bucle. 
                    }
                }
            }
            pantallaResult.textContent = String(result); // mostramos el resultado en pantalla. 
            // Reinicializamos operations y operands arrays.
            operands.length = 0;
            operations.length = 0;
        }

    }

}
