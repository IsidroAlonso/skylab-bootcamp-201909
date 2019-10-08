/**
 * @param {}
 * 
 * @returns {}
 * 
 * @throws {}
 */
function every(array, expression) {
    // if() {
    //     throw 'Error';
    // }
    try {
        for (var i = 0; i < array.length; i++)
            return expression(array[i]) === array[i]? true : false;
    }
    catch(err) {
        console.log(err.message);
    }
}