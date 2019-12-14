describe('Hooray.prototype.reverse', function(){

    
    it('Should succeed the operation, reversing the first item of the hooray to the last item and viceversa', function(){
        var hooray, result, expected;

        hooray = new Hooray (1, 2, 3, 4);
        expected = new Hooray (4, 3, 2, 1);
        result = hooray.reverse();

        console.log(hooray);
        console.log(result);
        
        expect(result).toEqual(expected);
        expect(result.length).toBe(4);

    });

    it('Should succeed the operation, reversing the same order when hooray only contains one item', function(){
        var hooray, result, expected;

        hooray = new Hooray (1);
        expected = new Hooray (1);
        result = hooray.reverse();

        console.log(hooray);
        console.log(result);
        
        expect(result).toEqual(expected);
        expect(result.length).toBe(1);

    });

    it('Should succeed the operation, returning the same [] when hooray has no items;', function(){
        var hooray, result, expected;

        hooray = new Hooray ();
        expected = new Hooray ();
        result = hooray.reverse();

        console.log(hooray);
        console.log(result);
        
        expect(result).toEqual(expected);
        expect(result.length).toBe(0);

    });
    
    
});  