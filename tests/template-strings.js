var expect = require('chai').expect;


describe('template strings', function() {
  it('should be just a string', function() {
  var string ='abc';
     expect(string).to.be.a('string');
  });

  it('can evaluate variables', function() {
    var bar = `baz`;
    var string = `foo${bar}`;

    expect(string).to.equal('foobaz');
  });

  it('can execute functions', function() {
    var string = `the date is: ${new Date()}`;
    var date = new Date();

    expect(string).to.equal(`the date is: ` + date);
  })

  it('can evaluate an expression', function() {
    var expression = `1 + 2 = ${1 + 2}`;

    expect(expression).to.equal(`1 + 2 = 3`);
  });
});



