describe('pop', function () {

    it('should extract the last number of the array', function (){

        var numbers = [10, 20, 30];

        var result = pop(numbers);

        expect(result).toBe(30);

        // expect(numbers).toBe([10, 20]);

    })

    it('should extract the last string of the array', function (){

        var strings = ['hola', 'que tal', 'adios'];

        var result = pop(strings);

        expect(result).toBe('adios');

        // expect(numbers).toBe(['hola', 'que tal']);

    })

})