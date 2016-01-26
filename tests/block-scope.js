"use strict";
var expect = require('chai').expect;

describe('block scope', function() {
  it('uses let to declare a local variable', function() {
    let beta = 12 + 5;

    expect(beta).to.eql(17);
  });

  it('should not be available globally', function() {
    let x = 1;
    let y = this.x;

    expect(y).to.equal(undefined);
  });
});