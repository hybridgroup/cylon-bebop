"use strict";

var Cylon = require("cylon");

var Piloting = lib("piloting");

describe("Cylon.Bebop.Piloting", function() {
  var driver = new Piloting({
    connection: {}
  });

  it("is a Cylon driver", function() {
    expect(driver).to.be.an.instanceOf(Cylon.Driver);
  });

  it("needs tests");
});
