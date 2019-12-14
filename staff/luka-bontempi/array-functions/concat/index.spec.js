describe ('concat', function() {

    it ('should join two or more array on a new array', function () {

        var array1 = [1,2,2,4];
        var array2 = [5,6,7,8];

        var result = array1.concat (array2);

        expect(result).toEqual([1,2,2,4,5,6,7,8]);

        expect (result.length).toBe(array1.length+array2.length);
       
    }) 


    it ('should join the calling array on a new array when no parameters defined', function () {

        var array1 = [1,2,2,4];
        
        var result = array1.concat();

        
        expect(result).toEqual(array1);

        expect(result.length).toBe(array1.length);
    })

    it ('should join the array sent by parameter on a new array when the calling array is empty', function () {

        var array1 = [];
        var array2 = [1,2,2,4];
       
        
        var result = array1.concat (array2);

        expect(result).toEqual(array2);

        expect (result.length).toBe(array1.length+array2.length);
    })

    it ('should concat to the returned array the parameters sent even they are not a array', function () {

        var array1 = [2, 4, 6];
        var number = 3;
        var string ="abc";
        var result = array1.concat (number, string);

        
        expect(result).toContain(2,4,6,4,"abc");

        expect (result.length).toBe(5);
    })

}) 