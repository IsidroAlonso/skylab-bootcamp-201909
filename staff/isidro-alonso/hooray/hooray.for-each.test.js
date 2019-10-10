describe('Hooray.prototype.forEach', function () {
    it('should succeed on correct hooray and expression, adding all numbers', function () {
        var numbers = new Hooray(1, 2, 3);
        var result = 0;
        var add = function (number) { result += number; };

        numbers.forEach(add);

        expect(result).toBe(6);
    });

    it('should succeed on correct hooray and expression, concatenating all numbers', function () {
        var numbers = new Hooray(1, 2, 3);
        var result = '';
        var concatenate = function (number) { result += number; };

        numbers.forEach(concatenate);

        expect(result).toBe('123');
    });


    it('should succeed on correct hooray and expression, multiplying all numbers by 10', function () {
        var numbers = new Hooray(1, 2, 3);
        var result = [];
        var multiply = function (number, index) {  result[index] = number * 10; };

        numbers.forEach(multiply);

        expect(result.length).toBe(numbers.length);

        for (var i = 0; i < result.length; i++)
            expect(result[i]).toBe(numbers[i] * 10);
    });

    it('should fail on undefined expression', function () {
        var hooray = new Hooray(1, 2, 3);
        var expression; // = console.log;

        expect(function() { hooray.forEach(expression); }).toThrow(TypeError, 'undefined is not a function');
    });

    it('should fail on non-function expression', function () {
        var hooray = new Hooray(1, 2, 3);

        expect(function () { hooray.forEach(undefined); }).toThrow(TypeError, 'undefined is not a function');
        expect(function() { hooray.forEach(true); }).toThrow(TypeError, 'true is not a function');
        expect(function() { hooray.forEach(1); }).toThrow(TypeError, '1 is not a function');
    });
});

