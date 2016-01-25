var expect = require('chai').expect;

describe('arrow functions', function() {
  it('is shorter to write', function() {
    var fn = () => {
      return 'Hello World'
    };

    expect(fn()).to.equal('Hello World');
  });

  it('one parameter can be written without parens.', function() {
    var fn = name => {
      return `Hello ${name}`;
    };

    expect(fn('Matt')).to.equal('Hello Matt');
  });

  it('binds "this" to the function', function(done) {

    var that = this;
    setTimeout(() => {
      expect(that).to.eql(this);
      done();
    }, 0);
  });
});

// Write more tests tonight.
// destructuring
// 2 tests
// One with Obj one with Arr.
// blockscope, let, and const
// 2 tests, both with let.
// destructuring working with node requires scott's instruction, else disregard.
