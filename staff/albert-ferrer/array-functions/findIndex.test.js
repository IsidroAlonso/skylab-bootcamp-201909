var ar = [34,65,12,46,93];

function biggerthan35 (num){

    if (num > 35){

        return true;
    } else {

        return false;
    }

}

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

var ar = [34,65,12,46,93];

function biggerthan35 (num){

    if (num > 35){

        return true;
    } else {

        return false;
    }

}

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

console.log(findIndex(ar,biggerthan35));