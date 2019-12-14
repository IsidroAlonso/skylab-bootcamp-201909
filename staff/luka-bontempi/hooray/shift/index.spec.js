describe('Hooray.prototype.shift', function () {
    it('should delete the first element', function () {
        var hooray = new Hooray(1, 2, 3);

        var firstElement = hooray.shift();

        expect(firstElement).toBe(1);
        expect(hooray.length).toBe(2);

        var chars = [2, 3];
        for (var i = 0; i < chars.length; i++)
            expect(hooray[i]).toBe(chars[i]);
    });

});