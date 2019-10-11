function shuffle(array) {
    if (!(array instanceof Array)) throw new TypeError(array + ' is not an array');
    
    var result = [];

    for (var i = 0; i < array.length; i++) result[i] = array[i];

    for (var i = 0; i < result.length; i++) {
        var random = Math.floor(Math.random() * result.length); // 0 <> length-1

        var value = result[i];

        result[i] = result[random];

        result[random] = value;
    }

    //result[0] = ':P';

    return result;
}