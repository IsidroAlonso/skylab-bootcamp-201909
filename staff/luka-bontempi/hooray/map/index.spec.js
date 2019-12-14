describe('Hooray.prototype.map', function () {

    it('should succeed on correct expression, adding all numbers 2 and resulting in new array', function () {
        var numbers = new Hooray(1, 2, 3);
        var result = new Hooray();
        
            var add = function (number) { 
                
               return number + 2;
            };

        result = numbers.map(add);
        var expected = new Hooray(3, 4, 5);

        expect(result).toEqual(expected);
        expect(add).toBeInstanceOf(Function);
        // expect(result.length).toBe(expected.length);
    });


    it('should fail on non-function expression', function () {
        var numbers = new Hooray(1, 2, 3);
        var result = new Hooray();
        
            var add = function (number) { 
                
               return number + 2;
            };
        
        // expect(!(add).toBeInstanceOf(Function));

        expect(function () { numbers.map(); }).toThrowError('undefined is not a function');
        expect(function() { numbers.map(true); }).toThrowError('true is not a function');
        expect(function() { numbers.map(1); }).toThrowError('1 is not a function');
    });
});
