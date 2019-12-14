numbers = [1,2,3,4,5];

function unshift(array){ 
    for (var i = array.length-1; i < 0; i--){
        array[i + arguments.length-1]=array[i];
    }
}
unshift(numbers, 6);