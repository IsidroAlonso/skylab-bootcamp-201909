describe ('includes', function(){

    it('should find the value included on the string', function(){

        var array = [1, 2, 3, 4];

        var result = includes(array, 3);

        expect(result).toBe(true);

    })

    it('should not find the value because it\'s not included on the string', function(){

        var array = [1, 2, 3, 4];

        var result = includes(array, 6);

        expect(result).toBe(false);

    })

    it('should find the value included on the string', function(){

        var array = ['a', 'b', 'c'];

        var result = includes(array, 'a');

        expect(result).toBe(true);

    })

    it('should not find the value because it\'s not included on the string', function(){

        var array = ['a', 'b', 'c'];

        var result = includes(array, 'd');

        expect(result).toBe(false);

    })

})