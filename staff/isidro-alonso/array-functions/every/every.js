/**
 * 
 */
function every(array, evaluation) {
    array = [];
    for (var i = 1; i < array.length; i++)
        evaluation(array[i]) ? true : false;
}