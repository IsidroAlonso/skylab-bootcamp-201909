 
describe ("some", function(){
    it("Should return true if any of the array items accomplish the condition", function(){
        var array = [1,4,5,53,23,37];
        function checkCondition(item) {
            return item > 5
        }
        var result = some(array, checkCondition);
    
        expect(result).toBe(true);

    });

    it ("Should return false if there are no matches between the array items with the condition given", function(){
        var array = [1,4,5,53,23,37];
        function checkCondition(item) {
            return item > 55
        }

        var result = some(array, checkCondition);

        expect(result).toBe(false);

    });


    it ("Should return false if you give an empty array", function(){
        var array = [];
        function checkCondition(item) {
            return item > 55
        }

        var result = some(array, checkCondition);

        expect(result).toBe(false);

    });

    it("should return expression is not a function", function() {
        var array = [];
       

        expect(function() { some(array, undefined); }).toThrowError(TypeError, 'undefined is not a function');

    });

    
});

