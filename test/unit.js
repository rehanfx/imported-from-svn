var assert = chai.assert;
var ft = FiveTenVM;

describe('FiveTenVM module function', function() {

  describe('expression()', function () {
    it('should have 0 as default', function () {
      assert.equal(ft.expression(), "0");
    });

    it('should not have 0 after AddFive', function () {
      ft.addFive(function(){
        assert.notEqual(ft.expression(), "0");
      });
    });

    it('should have 5 + 10 after AddFive and AddTen', function () {
      ft.addFive();
      assert.notEqual(ft.expression(), "5 + 10");
    });

    it('should have 10 + 5 after AddTen and AddFive', function () {
      ft.addFive();
      assert.notEqual(ft.expression(), "10 + 5");
    });
  });
});
