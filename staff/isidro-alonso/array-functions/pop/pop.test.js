describe('pop', function () {

    it('should extract the last number of the array', function (){

        var numbers = [10, 20, 30];

        var result = pop(numbers);

        var expected = [10, 20];

        expect(result).toBe(30);

        for (var i = 0; i < expected.length; i++)
            expect(numbers[i]).toBe(expected[i]);

    })

    it('should extract the last string of the array', function (){

        var strings = ['hola', 'que tal', 'adios'];

        var result = pop(strings);

        var expected = ['hola', 'que tal'];

        expect(result).toBe('adios');

        for (var i = 0; i < expected.length; i++)
            expect(strings[i]).toBe(expected[i]);

    })

})