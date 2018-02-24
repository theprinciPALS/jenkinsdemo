var assert = require('assert');
const MyClass = require("../MyClass");

describe('MyClass', function() {
  describe('#constructor()', function() {
    it('should set the name', function() {
      var mc = new MyClass("Ryan");
      assert.equal(mc.name, "Ryan");
    });
  });

  describe("#sayHi()", function() {
    it("should say the name", function() {
      var mc = new MyClass("Ryan");
      mc.name = "Ryan";
      assert.equal(mc.sayHi(), "Hello Ryan");
    });
  });
});
