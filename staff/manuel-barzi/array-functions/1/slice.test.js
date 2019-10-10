describe('slice', function() {
    it('should return a new array with the values in the given limits', function() {
        var numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];

        var result = slice(numbers, 3, 7);

        expect(result === numbers).toBe(false);
        expect(result instanceof Array).toBe(true);

        var expected = [1, 2, 3, 4, 5, 6, 7, 8, 9];
        for (var i = 0; i < expected.length; i++)
            expect(numbers[i]).toBe(expected[i]);

        expected = [4, 5, 6];
        for (var i = 0; i < expected.length; i++)
            expect(result[i]).toBe(expected[i]);
    });

    it('should return a new array with the values in from the beginning (no ending)', function() {
        var numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];

        var result = slice(numbers, 2);

        expect(result === numbers).toBe(false);
        expect(result instanceof Array).toBe(true);

        var expected = [1, 2, 3, 4, 5, 6, 7, 8, 9];
        for (var i = 0; i < expected.length; i++)
            expect(numbers[i]).toBe(expected[i]);

        expected = [3, 4, 5, 6, 7, 8, 9];
        for (var i = 0; i < expected.length; i++)
            expect(result[i]).toBe(expected[i]);
    });

    it('should return a new empty array (from an empty array) from a beginning (no ending)', function() {
        var numbers = [];

        var result = slice(numbers, 12);

        expect(result === numbers).toBe(false);
        expect(result instanceof Array).toBe(true);

        expect(result.length).toBe(0);
    });

    it('should return a new array with the same values of the original array when no beginning and no ending', function() {
        var numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];

        var result = slice(numbers);

        expect(result === numbers).toBe(false);
        expect(result instanceof Array).toBe(true);

        var expected = [1, 2, 3, 4, 5, 6, 7, 8, 9];
        for (var i = 0; i < expected.length; i++)
            expect(numbers[i]).toBe(expected[i]);

        expected = [1, 2, 3, 4, 5, 6, 7, 8, 9];
        for (var i = 0; i < expected.length; i++)
            expect(result[i]).toBe(expected[i]);
    });

    it('should return a new array with the last values of the original array when beginning is negative and no ending', function() {
        var numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];

        var result = slice(numbers, -4);

        expect(result === numbers).toBe(false);
        expect(result instanceof Array).toBe(true);

        var expected = [1, 2, 3, 4, 5, 6, 7, 8, 9];
        for (var i = 0; i < expected.length; i++)
            expect(numbers[i]).toBe(expected[i]);

        expected = [6, 7, 8, 9];
        for (var i = 0; i < expected.length; i++)
            expect(result[i]).toBe(expected[i]);
    });

    it('should return a new array with values of the original array from the beginning and ending, both negatives', function() {
        var numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];

        var result = slice(numbers, -7, -3);

        expect(result === numbers).toBe(false);
        expect(result instanceof Array).toBe(true);

        var expected = [1, 2, 3, 4, 5, 6, 7, 8, 9];
        for (var i = 0; i < expected.length; i++)
            expect(numbers[i]).toBe(expected[i]);

        expected = [3, 4, 5, 6];
        for (var i = 0; i < expected.length; i++)
            expect(result[i]).toBe(expected[i]);
    });

    it('should return a new array with no values when the beginning and ending are both negatives and ending < beginning', function() {
        var numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];

        var result = slice(numbers, -3, -7);

        expect(result === numbers).toBe(false);
        expect(result instanceof Array).toBe(true);

        var expected = [1, 2, 3, 4, 5, 6, 7, 8, 9];
        for (var i = 0; i < expected.length; i++)
            expect(numbers[i]).toBe(expected[i]);

        expect(result.length).toBe(0);
    });

    it('should fail on first parameter non-array', function() {
        expect(function() { slice(); }).toThrow(TypeError, 'undefined is not an array');

        expect(function() { slice(true); }).toThrow(TypeError, 'true is not an array');

        expect(function() { slice(1); }).toThrow(TypeError, '1 is not an array');

        expect(function() { slice('a'); }).toThrow(TypeError, 'a is not an array');
    });
});