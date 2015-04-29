"use strict";

var Cylon = require("cylon");

var Driver = source("driver");

describe("Driver", function() {
  var driver = new Driver({
    connection: {}
  });

  it("is a Cylon driver", function() {
    expect(driver).to.be.an.instanceOf(Cylon.Driver);
  });

  it("needs tests");
});
