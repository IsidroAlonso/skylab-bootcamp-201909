describe ('Hooray.prototype.concat', function() {

    it('should create a new hooray from two different ones', function() {
        
        var hooray1 = new Hooray('a', 'b', 'c');
        var hooray2 = new Hooray('d', 'e', 'f');

        var result = hooray1.concat(hooray1, hooray2);

        var expected = ['a', 'b', 'c', 'd', 'e', 'f']
        
        expect(result).toEqual(expected);
        expect(result).not.toBe(hooray1);

    })

    it('should create a new hooray from three different ones', function() {
        
        var hooray1 = new Hooray('a', 'b', 'c');
        var hooray2 = new Hooray('d', 'e', 'f');
        var hooray3 = new Hooray(7, 8, 9);

        var result = hooray1.concat(hooray1, hooray2, hooray3);

        var expected = ['a', 'b', 'c', 'd', 'e', 'f', 7, 8, 9]
        
        expect(result).toEqual(expected);
        expect(result).not.toBe(hooray1);

    })

    it('should create a new hooray from five different ones with different elements', function() {
        
        var hooray1 = new Hooray('a', 'b', 'c');
        var hooray2 = new Hooray('d', 'e');
        var hooray3 = new Hooray(7, 8, 9);
        var hooray4 = new Hooray('nadie', 'va a ser', 'tan');
        var hooray5 = new Hooray('palomo')

        var result = hooray1.concat(hooray1, hooray2, hooray3, hooray4, hooray5);

        var expected = ['a', 'b', 'c', 'd', 'e', 7, 8, 9,'nadie', 'va a ser', 'tan', 'palomo']
        
        expect(result).toEqual(expected);
        expect(result).not.toBe(hooray1);

    })

})