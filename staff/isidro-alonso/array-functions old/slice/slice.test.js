describe('slice', function () {

    it('should extract an array in the order that you select', function (){

        var array = ['a', 'b', 'c', 'd'];

        var result = slice(array, 1, 4);

        expect(result instanceof Array).toBe(true); // quiero asegurarme si es una array

        var expected = ['b', 'c'];
        
        for (var i = 0; i < expected.length; i++)
            expect(result[i]).toBe(expected[i]); // para revisar cada elemento


    })

});