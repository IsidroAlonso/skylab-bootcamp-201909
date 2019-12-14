describe("Hooray.prototype.pop", function() {
    it("Should remove the last item", function() {
        var h = new Hooray(1, 2, 3);
        expect(h.pop()).toBe(3);
    });

    it("Length of initial array should decrease(-1)", function() {
        var h = new Hooray(1, 2, 3);
        var expectedResult = new Hooray(1, 2);
        h.pop();
        expect(h).toEqual(expectedResult);
    });

    it("If h.length === 0 should return undefined", function() {
        var h = new Hooray();
        expect(h.pop()).toBe(undefined);
    });

});