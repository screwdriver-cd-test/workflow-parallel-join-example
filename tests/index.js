const assert = require("assert");
const lib = require('../');

describe("smoke test", function() {
  it("checks equality", function() {
    assert.equal(lib.hello(), "hello");
  });
});
