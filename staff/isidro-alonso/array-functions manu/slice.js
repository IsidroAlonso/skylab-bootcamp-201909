function slice(array, begin, end) {
    if (!(array instanceof Array)) throw new TypeError(array + ' is not an array');

    //if (typeof end === 'undefined') end = array.length;

    var result = []; // {}; // WTF?

    begin = begin || 0;
    begin = begin < 0? array.length + begin : begin;
    end = end || array.length;
    end = end < 0? array.length + end : end;

    for (var i = begin; i < end; i++)
        result[i - begin] = array[i];

    //result.length = end - begin; // WTF?
    
    return result;
}