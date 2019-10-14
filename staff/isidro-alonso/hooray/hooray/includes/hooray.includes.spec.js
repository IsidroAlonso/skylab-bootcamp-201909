describe ('includes', function(){

    it('should find the value included on the string', function(){

        var hooray = new Hooray(1, 2, 3, 4);

        var result = hooray.includes(3);

        expect(result).toBe(true);

    })

    it('should not find the value because it\'s not included on the string', function(){

        var hooray = new Hooray(1, 2, 3, 4);

        var result = hooray.includes(6);

        expect(result).toBe(false);

    })

    it('should find the value included on the string', function(){

        var hooray = new Hooray('a', 'b', 'c');

        var result = hooray.includes('a');

        expect(result).toBe(true);

    })

    it('should not find the value because it\'s not included on the string', function(){

        var hooray = new Hooray('a', 'b', 'c');

        var result = hooray.includes('d');

        expect(result).toBe(false);

    })

})