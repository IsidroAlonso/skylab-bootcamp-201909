

function findIndex (array, expression){

    //var aux = -1;

    for (var i= 0; i < array.length; i++){
        if (expression(array[i])){
            //aux=array[i];
            return i;
        }
    }

    return -1;
}

findIndex(ar,biggerthan35);

console.log(findIndex);