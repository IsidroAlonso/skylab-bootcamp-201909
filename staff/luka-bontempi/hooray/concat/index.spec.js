describe ('Hooray.prototype.concat', function() {

    it ('should join two or more hoorays on a new hooray', function () {

        var hooray1 = new Hooray (1,2,2,4);
        var hooray2 = new Hooray (5,6,7,8);

        var result = hooray1.concat (hooray2);

        expect(result).toContain(1,2,2,4,5,6,7,8);

        expect (result.length).toBe(hooray1.length+hooray2.length);
       
    }) 


    it ('should join the calling hooray on a new hooray when no parameters defined', function () {

        var hooray1 = new Hooray (1,2,2,4);
        
        var result = hooray1.concat ();

        
        expect(result).toEqual(hooray1);

        expect (result.length).toBe(hooray1.length);
    })

    it ('should join the hoorays sent by parameter on a new hooray when the calling hooray is empty', function () {

        var hooray1 = new Hooray ();
        var hooray2 = new Hooray (1,2,2,4);
        
        var result = hooray1.concat (hooray2);

        expect(result).toEqual(hooray2);

        expect (result.length).toBe(hooray1.length+hooray2.length);
    })

    it ('should concat to the returned hooray the parameters sent even they are not a hooray', function () {

        var hooray1 = new Hooray (2,4,6);
        var number = 3;
        var string ="abc";
        var result = hooray1.concat (number, string);

        
        expect(result).toContain(2,4,6,4,"abc");

        expect (result.length).toBe(5);
    })

}) 