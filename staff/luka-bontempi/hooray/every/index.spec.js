describe('Hooray.prototype.every', function () {
    it('should print true if all elements meet the condition', function () {
        var numbers = new Hooray(2, 3, 4, 5);
        
        var majorOne = function (item) {  return item > 1; };

        expect(numbers.every(majorOne)).toBe(true);

    });

    it('should print false if any element does not fulfill the condition', function () {
        var numbers = new Hooray(2, 3, 4, 5);
        
        var minorOne = function (item) {  return item < 1; };

        expect(numbers.every(minorOne)).toBe(false);
    });
    it('should fail on non-function expression', function () {
        var numbers = new Hooray(2, 3, 4, 5);

        expect(function() { numbers.every(undefined); }).toThrowError(TypeError, 'undefined is not a function');
        expect(function() { numbers.every(true); }).toThrowError(TypeError, 'true is not a function');
        expect(function() { numbers.every(1); }).toThrowError(TypeError, '1 is not a function');
    });

});

