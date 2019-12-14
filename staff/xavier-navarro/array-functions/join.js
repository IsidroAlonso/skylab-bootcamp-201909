/**
 * Return a string separated by the character it receives
 * 
 * @param {Array} array The array to iterate.
 * @param {Character} char Character by which we will separate the array
 * 
 * @returns {newArray} Return a string separated by the character it receives
 */
function join(array, char) {
    if(char === undefined) char =',';
    var result = '';
    for (var i = 0; i < array.length; i++) {
        if (i === array.length - 1)
            result += array[i];
        else
            result += array[i] + char;
    }
    return result;
 }