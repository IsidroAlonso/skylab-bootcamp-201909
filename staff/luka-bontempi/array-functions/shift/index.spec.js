describe('shift', function () {
    it('should delete the first element', function () {
        var array = [1, 2, 3];

        var firstElement = shift(array);

        expect(firstElement).toBe(1);
        expect(array.length).toBe(2);

        var chars = [2, 3];
        for (var i = 0; i < chars.length; i++)
            expect(array[i]).toBe(chars[i]);
    });

});