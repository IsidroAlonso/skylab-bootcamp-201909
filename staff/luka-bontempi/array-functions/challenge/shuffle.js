
var numbers = [1, 2, 3, 4, 5];


function shuffle(array){ 
    var result = [];
    
    
    for(var i = 0; i < array.length; i++) result[i] = array[i];

    for(var i = 0; i < result.length; i++){
        var randomIndex = Math.floor(Math.random() * result.length);

        var value = result[i];
        result[i] = result[randomIndex];
        result[randomIndex] = value;
    }    

    return result

}


var randomized = shuffle(numbers);
console.log(randomized)
