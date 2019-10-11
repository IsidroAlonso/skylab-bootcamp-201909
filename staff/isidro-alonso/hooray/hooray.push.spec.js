describe('Hooray.prototype.push', function () {
    it('should push a single item', function () {
        var hooray = new Hooray('a', 'b', 'c');

        expect(hooray.push('d')).toBe(4);
        expect(hooray.length).toBe(4);
        expect(hooray[hooray.length - 1]).toBe('d');

        var chars = ['a', 'b', 'c', 'd'];
        for (var i = 0; i < chars.length; i++)
            expect(hooray[i]).toBe(chars[i]);
    });

    it('should push multiple items', function () {
        var hooray = new Hooray('a', 'b', 'c');

        expect(hooray.push('d', 'e', 'f', 'g', 'h', 'i', 'j', 'k')).toBe(11);
        expect(hooray.length).toBe(11);

        var chars = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k'];
        for (var i = 0; i < hooray.length; i++)
            expect(hooray[i]).toBe(chars[i]);
    });
});