describe('pop', function () {
    it('should deletes the last item from the hooray and return the deleted element', function () {
        var array = [1, 2, 3, 4, 5];
        var result = pop(array);
        var expected = [1, 2, 3, 4];

        expect(array.length).toBe(4);
        expect(result).toBe(5);
        expect(array).toEqual(expected);
    });

    it('should returns an empty hooray if the hooray length at the beginning is 1', function () {
        var array = [1];
        var result = pop(array);
        var expected = [];

        expect(array.length).toBe(0);
        expect(result).toBe(1);
        expect(array).toEqual(expected);
    });

    it('should returns undefined if the hooray is empty', function () {
        var array = [];
        var result = pop(array);
        var expected = [];

        expect(result).toBeUndefined();
        expect(array).toEqual(expected);
    });    
});