describe('every', function () {
    it('should print true if all elements meet the condition', function () {
        var numbers = [2, 3, 4, 5];
        
        var majorOne = function (item) {  return item > 1; };

        expect(every(numbers, majorOne)).toBe(true);

    });

    it('should print false if any element does not fulfill the condition', function () {
        var numbers = [2, 3, 4, 5];
        
        var minorOne = function (item) {  return item < 1; };

        expect(every(numbers, minorOne)).toBe(false);
    });
    it('should fail on non-function expression', function () {
        var numbers = [2, 3, 4, 5];

        expect(function() { every(numbers, undefined); }).toThrowError(TypeError, 'undefined is not a function');
        expect(function() { every(numbers, true); }).toThrowError(TypeError, 'true is not a function');
        expect(function() { every(numbers, 1); }).toThrowError(TypeError, '1 is not a function');
    });

});
