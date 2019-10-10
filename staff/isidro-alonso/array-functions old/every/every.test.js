describe('every', function () {

    it('has to confirm that at least there\'s one number greater than one of the array', function () {

        var numbers = [1, 2, 3, 4];
        var result = 0;

        var condition = function (element) { result = element > 2; };

        find(numbers, condition);

        expect(result).toBe(true);

    });

    it('has to confirm if there\'s a string on the array', function () {

        var numbers = [1, 2, 3, 4];
        var result = 0;

        var condition = function (element) { result = element === 'b'; }

        find(numbers, condition);

        expect(result).toThrow(TypeError,'target is not a function');

    });

    it('has to confirm if there\'s a number on the array', function () {

        var strings = ['a', 'b', 'c'];
        var result = 0;

        var condition = function (element) { result = element === 2; };

        find(strings, condition);

        expect(result).toThrow(TypeError,'target is not a function');

    });

    it('has to confirm if there\'s a string on the array', function () {

        var strings = ['a', 'b', 'c'];
        var result = 0;

        var condition = function (element) { result = element === 'c'; };

        find(strings, condition);

        expect(result).toBe(true);

    });

    it('has to confirm that at least there\'s one number greater than one of the array', function () {

        var strings = [1, 2, 3];
        var result = 0;
    
        var condition = function (element) { result = element > 3; };
    
        find(strings, condition);
    
        expect(result).toBe(false);
    
    });

});