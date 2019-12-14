describe ("hooray.prototype.some", function(){
    it("Should return true if any of the hooray items accomplish the condition", function(){
        var hoorayNumbers = new Hooray (1,4,5,53,23,37);
        function checkCondition(item) {
            return item > 5
        }
        var result = hoorayNumbers.some(checkCondition);
    
        expect(result).toBe(true);

    });

    it ("Should return false if there are no matches between the hooray items with the condition given", function(){
        var hoorayNumbers = new Hooray (1,4,5,53,23,37);
        function checkCondition(item) {
            return item > 55
        }

        var result = hoorayNumbers.some(checkCondition);

        expect(result).toBe(false);

    });


    it ("Should return false if you give an empty hooray", function(){
        var hoorayNumbers = new Hooray();
        function checkCondition(item) {
            return item > 55
        }

        var result = hoorayNumbers.some(checkCondition);

        expect(result).toBe(false);

    });

    // ERRORES


    it("should return expression is not a function", function() {
        var hoorayNumbers = new Hooray();
        var checkCondition;

        expect(function() { hoorayNumbers.some(checkCondition); }).toThrowError(TypeError, "undefined is not a function");

    });

    
});