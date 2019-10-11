describe('push', function () {
    it('should push a single item', function () {
        var array = ['a', 'b', 'c'];

        expect(push(array, 'd')).toBe(4);
        expect(array.length).toBe(4);
        expect(array[array.length - 1]).toBe('d');

        var expected = ['a', 'b', 'c', 'd'];
        expect(array).toEqual(expected);
    });

    it('should push multiple items', function () {
        var array = ['a', 'b', 'c'];

        expect(push(array, 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k')).toBe(11);
        expect(array.length).toBe(11);

        var expected = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k'];
        expect(array).toEqual(expected);
    });
});