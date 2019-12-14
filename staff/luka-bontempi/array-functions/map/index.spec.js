describe('map', function () {

    it('should succeed on correct expression, adding all numbers 2 and resulting in new array', function () {
        var numbers = [1, 2, 3];
        var result = [];
        
            var add = function (number) { 
                
               return number + 2;
            };

        result = map(numbers, add);
        var expected = [3, 4, 5];

        expect(result).toEqual(expected);
        expect(add).toBeInstanceOf(Function);
    });


    it('should fail on non-function expression', function () {
        var numbers = [1, 2, 3];

        expect(function () { map(numbers); }).toThrowError('undefined is not a function');
        expect(function() { map(numbers, true); }).toThrowError('true is not a function');
        expect(function() { map(numbers, 1); }).toThrowError('1 is not a function');
    });
});