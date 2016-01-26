"use strict";
var expect = require('chai').expect;

describe('destructuring', function() {
  it('should use destructuring to create an array', function() {
    var something = [3, 4, 5];
    var [three, four, five] = something;

    expect(something).to.eql([three, four, five]);
  });

  it('should use destructuring to create an object', function() {
    var epsilon = {a: true, b: 4};
    var {a, b} = epsilon;

    var {a: alpha, b: beta} = epsilon;

    expect(epsilon).to.eql({a: true, b: 4});
  });
});