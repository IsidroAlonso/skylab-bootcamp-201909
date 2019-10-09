describe('slice', function () {

    it('it should extract the array in the order that you select', function (){

        var array = ['a', 'b', 'c', 'd'];

        var result = slice(array, 1, 4);

        expect(result).toBe(['b', 'c']);

    })

});