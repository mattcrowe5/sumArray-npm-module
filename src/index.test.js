var expect = require("chai").expect;
var summing = require("./index").module.sumArr;

describe("sumArrays", function() {
  it("should correctly add first example", function() {
    expect(summing([1, 2, 3], [4, 5, 6])[0]).to.equal(5);
    expect(summing([1, 2, 3], [4, 5, 6])[1]).to.equal(7);
    expect(summing([1, 2, 3], [4, 5, 6])[2]).to.equal(9);
    expect(summing([1, 2, 3], [4, 5, 6]).length).to.equal(3);
  });
  it("should correctly add second example", function() {
    expect(summing([1, 1], [1, 5])[0]).to.equal(2);
    expect(summing([1, 1], [1, 5])[1]).to.equal(6);
    expect(summing([1, 1], [1, 5]).length).to.equal(2);
  });
  it("should correctly add third example", function() {
    expect(summing([1, 1, 1], [1, 5])[0]).to.equal(1);
    expect(summing([1, 1, 1], [1, 5])[1]).to.equal(2);
    expect(summing([1, 1, 1], [1, 5])[2]).to.equal(6);
    expect(summing([1, 1, 1], [1, 5]).length).to.equal(3);
  });
  it("should return an array", function() {
    expect(Array.isArray(summing([1, 1, 1], [1, 5]))).to.be.true;
  });
});
