describe('forEach', function() {
	it('should succeed on correct array and expression, adding all numbers', function() {
        var numbers = [1, 2, 3];
        var result = 0;
        var add = function(number) { result += number; };

        forEach(numbers, add);

        expect(result).toBe(6);
    }, function(error) {
        expect(error).toBe(undefined);
    });  


    it('should succeed on correct array and expression, concatenating all numbers', function() {
        var numbers = [1, 2, 3];
        var result = '';
        var concatenate = function(number) { result += number; };

        forEach(numbers, concatenate);

        expect(result).toBe('123');
    }, function(error) {
        expect(error).toBe(undefined);
    });  


    it('should fail on undefined array', function() {
        var array; //= [1, 2, 3];
        var expression = console.log;

        forEach(array, expression);

        expect(true).toBe(false);
    }, function(error) {
        expect(error.message).toBe('undefined is not an array');
    });    


    it('should fail on undefined expression', function() {
        var array = [1, 2, 3];
        var expression; // = console.log;

        forEach(array, expression);

        expect(true).toBe(false);
    }, function(error) {
        expect(error.message).toBe('undefined is not a function');
    });    
});