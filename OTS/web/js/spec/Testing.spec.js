/// <reference path="../../Scripts/jasmine/jasmine.js" />
describe("Testing Jasmine", function() {
  
    it("Object Behavior Call", function () {
        var foo = {
            a: 12,
            b: 34
        };
        var bar = {
            a: 12,
            b: 34
        };
       expect(foo).toEqual(bar);
    });
});

