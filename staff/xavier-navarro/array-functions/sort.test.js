describe('sort', function () {
    it('should succeed on sorting all  elements of the array upwards', function () {
        var array = [ 'hola', 10, 'adios', 2, 'abc', 5, 25 ];
        var result = sort(array);
        result = result.toString();
        expect(result).toBe([10,2,25,5,'abc','adios','hola'].toString());
    });

    it('should succeed on sorting sending an expression to sort it upwards', function () {
        var array = [ 'hola', 10, 'adios', 2, 'abc', 5, 25 ];
        var result = sort(array,(a,b)=>a+b);
        result = result.toString();

        expect(result).toBe([10,2,25,5,'abc','adios','hola'].toString());
    });

    it('should succeed on sorting sending an expression to sort it downwardly', function () {
        var array = [ 'hola', 10, 'adios', 2, 'abc', 5, 25 ]; 
        var result = sort(array,(a,b)=>a-b);
        result = result.toString();

        expect(result).toBe(['hola','adios','abc',5,25,2,10].toString());
    });

    // Errors
    it('should fail if array is not an array', function () {
        var array = "Fsd";

        expect(function() { sort(array); }).toThrow(TypeError, array+'is not an array');
    });

    it('should fail on passing a string', function () {
        var array = "[1, 2, 3]";

        expect(function() { sort(array); }).toThrow(TypeError, 'undefined is not a function');
    });

//     it('should fail on non-function expression', function () {
//         var array = [1, 2, 3];

//         //throw Error('hola mundo');

//         expect(function () { forEach(array, undefined); }).toThrow(TypeError, 'undefined is not a function');
//         expect(function() { forEach(array, true); }).toThrowError('true is not a function');
//         expect(function() { forEach(array, 1); }).toThrowError('1 is not a function');
//     });
});

