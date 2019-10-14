describe ('concat', function() {

    it('should create a new array from two different ones', function() {
        
        var array1 = ['a', 'b', 'c'];
        var array2 = ['d', 'e', 'f'];

        var result = concat(array1, array2);

        var expected = ['a', 'b', 'c', 'd', 'e', 'f']
        
        expect(result).toEqual(expected);
        expect(result).not.toBe(array1);
        expect(result).toBeInstanceOf(Array);

    })

    it('should create a new array from three different ones', function() {
        
        var array1 = ['a', 'b', 'c'];
        var array2 = ['d', 'e', 'f'];
        var array3 = [7, 8, 9];

        var result = concat(array1, array2, array3);

        var expected = ['a', 'b', 'c', 'd', 'e', 'f', 7, 8, 9]
        
        expect(result).toEqual(expected);
        expect(result).not.toBe(array1);
        expect(result).toBeInstanceOf(Array);

    })

    it('should create a new array from five different ones with different elements', function() {
        
        var array1 = ['a', 'b', 'c'];
        var array2 = ['d', 'e'];
        var array3 = [7, 8, 9];
        var array4 = ['nadie', 'va a ser', 'tan'];
        var array5 = ['palomo']

        var result = concat(array1, array2, array3, array4, array5);

        var expected = ['a', 'b', 'c', 'd', 'e', 7, 8, 9,'nadie', 'va a ser', 'tan', 'palomo']
        
        expect(result).toEqual(expected);
        expect(result).not.toBe(array1);
        expect(result).toBeInstanceOf(Array);

    })

    it('should create a new array from two empty arrays', function() {
        
        var array1 = [];
        var array2 = [];

        var result = concat(array1, array2);

        var expected = []
        
        expect(result).toEqual(expected);
        expect(result).not.toBe(array1);
        expect(array1).toBeInstanceOf(Array);
        expect(result).toBeInstanceOf(Array);

    })

    it('should create a new array from three different ones, one of them is empty', function() {
        
        var array1 = ['a', 'b', 'c'];
        var array2 = [];
        var array3 = [7, 8];

        var result = concat(array1, array2, array3);

        var expected = ['a', 'b', 'c', 7, 8]
        
        expect(result).toEqual(expected);
        expect(result).not.toBe(array1);
        expect(result).toBeInstanceOf(Array);

    })

})