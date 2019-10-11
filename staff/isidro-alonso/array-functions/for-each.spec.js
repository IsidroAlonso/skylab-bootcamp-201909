describe('forEach', function () {
    it('should succeed on correct array and expression, adding all numbers', function () {
        var numbers = [1, 2, 3];
        var result = 0;
        var add = function (number) { result += number; };

        forEach(numbers, add);

        expect(result).toBe(6);
    });

    it('should succeed on correct array and expression, concatenating all numbers', function () {
        var numbers = [1, 2, 3];
        var result = '';
        var concatenate = function (number) { result += number; };

        forEach(numbers, concatenate);

        expect(result).toBe('123');
    });


    it('should succeed on correct array and expression, multiplying all numbers by 10', function () {
        var numbers = [1, 2, 3];
        var result = [];
        var multiply = function (number, index) {  result[index] = number * 10; };

        forEach(numbers, multiply);

        expect(result.length).toBe(numbers.length);

        var expected = [10, 20, 30];

        expect(result).toEqual(expected);
    });

    it('should fail on undefined array', function () {
        var array; //= [1, 2, 3];
        var expression = console.log;

        expect(function() { forEach(array, expression); }).toThrowError(TypeError, 'undefined is not an array');
    });

    it('should fail on undefined expression', function () {
        var array = [1, 2, 3];
        var expression; // = console.log;

        expect(function() { forEach(array, expression); }).toThrowError(TypeError, 'undefined is not a function');
    });

    it('should fail on non-function expression', function () {
        var array = [1, 2, 3];

        //throw Error('hola mundo');

        expect(function () { forEach(array, undefined); }).toThrowError(TypeError, 'undefined is not a function');
        expect(function() { forEach(array, true); }).toThrowError('true is not a function');
        expect(function() { forEach(array, 1); }).toThrowError('1 is not a function');
    });
});

