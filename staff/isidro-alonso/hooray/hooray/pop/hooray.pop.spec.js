describe('Hooray.prototype.pop', function () {

    it('should pop last item', function () {
        var hooray = new Hooray('a', 'b', 'c');

        var expected = ['a', 'b'];

        expect(hooray.pop()).toBe('c');
        expect(hooray.length).toBe(2);
        // expect(hooray[hooray.length-1]).toBe('b');
        
        for (var i = 0; i < hooray.length; i++)
            expect(hooray[i]).toBe(expected[i]);
    });

    it('should pop last item', function () {
        var hooray = new Hooray('a', 'b', 'c');

        var expected = ['a', 'b'];

        expect(hooray.pop(1)).toBe('c');
        expect(hooray.length).toBe(2);
        // expect(hooray[hooray.length-1]).toBe('b');
        
        for (var i = 0; i < hooray.length; i++)
            expect(hooray[i]).toBe(expected[i]);
    });
});