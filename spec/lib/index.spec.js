"use strict";

var index = source("index");

var Adaptor = source("adaptor"),
    Driver = source("driver");

describe("index", function() {
  describe("#adaptors", function() {
    it("is an array of supplied adaptors", function() {
      expect(index.adaptors).to.be.eql(['bebop']);
    });
  });

  describe("#drivers", function() {
    it("is an array of supplied drivers", function() {
      expect(index.drivers).to.be.eql(['bebop']);
    });
  });

  describe("#dependencies", function() {
    it("is an array of supplied dependencies", function() {
      expect(index.dependencies).to.be.eql([]);
    });
  });

  describe("#driver", function() {
    it("returns an instance of the Driver", function() {
      expect(index.driver()).to.be.instanceOf(Driver);
    });
  });

  describe("#adaptor", function() {
    it("returns an instance of the Adaptor", function() {
      expect(index.adaptor()).to.be.instanceOf(Adaptor);
    });
  });
});
