describe('join', function(){

    it('should return one string of numbers', function (){

        var array = [1, 2, 3];

        var result = join(array, '-');

        var expected = '1-2-3';

        expect(result).toEqual(expected);
        expect(result).toBe('1-2-3');
        expect(result).toBeInstanceOf(String);
        expect(expected).toBeInstanceOf(String);

    })

    it('should return one string of words', function (){

        var array = ['bla', 'blo', 'bli'];

        var result = join(array, '');

        var expected = 'blablobli';

        expect(result).toEqual(expected);
        expect(result).toBe('blablobli');
        expect(result).toBeInstanceOf(String);
        expect(expected).toBeInstanceOf(String);

    })

    it('should return one string of numbers wo separate', function (){

        var array = [1, 2, 3];

        var result = join(array);

        var expected = '1,2,3';

        expect(result).toEqual(expected);
        expect(result).toBe('1,2,3');
        expect(result).toBeInstanceOf(String);
        expect(expected).toBeInstanceOf(String);

    })

    it('should return one string of words wo separate', function (){

        var array = ['bla', 'blo', 'bli'];

        var result = join(array);

        var expected = 'bla,blo,bli';

        expect(result).toEqual(expected);
        expect(result).toBe('bla,blo,bli');
        expect(result).toBeInstanceOf(String);
        expect(expected).toBeInstanceOf(String);

    })

    it('should throw an error message', function(){
        var array;
        
        expect(join(array)).toThrowError(TypeError,'Cannot read property \'undefined\' of undefined');

    })

})