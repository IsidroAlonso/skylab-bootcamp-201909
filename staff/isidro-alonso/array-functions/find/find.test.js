describe('find', function() {

    it('should return the first numeric value that meets the condition', function() {

        var numbers = [5, 12, 8, 130, 44];

        var expression = function(element) { return element > 10 };

        var result = find(numbers, expression);

        expect(result).toBe(12);

    })

    it('should return the first string that matches', function() {

        var letters = ['a', 'b', 'c'];

        var expression = function(element) { return element === 'c'};

        var result = find(letters, expression);

        expect(result).toBe('c');

    })

    it('should return \'undefined\' if the conditions doesn\'t meet (with numbers)', function() {

        var numbers = [5, 12, 8, 130, 44];

        var expression = function(element) { return element < 1 };

        var result = find(numbers, expression);

        expect(result).toBe(undefined);

    })

    it('should return \'undefined\' if the conditions doesn\'t meet (with words)', function() {

        var letters = ['e', 'i', 'o'];

        var expression = function(element) { return element === 'f' };

        var result = find(letters, expression);

        expect(result).toBe(undefined);

    })

})