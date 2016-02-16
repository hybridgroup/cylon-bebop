"use strict";

var index = lib("../");

var Adaptor = lib("adaptor"),
    Driver = lib("driver"),
    Piloting = lib("piloting");

describe("index", function() {
  describe("#adaptors", function() {
    it("is an array of supplied adaptors", function() {
      expect(index.adaptors).to.be.eql(["bebop"]);
    });
  });

  describe("#drivers", function() {
    it("is an array of supplied drivers", function() {
      expect(index.drivers).to.be.eql(["bebop", "piloting"]);
    });
  });

  describe("#dependencies", function() {
    it("is an array of supplied dependencies", function() {
      expect(index.dependencies).to.be.eql([]);
    });
  });

  describe("#driver", function() {
    describe("bebop driver", function() {
      it("returns an instance of the bebop Driver", function() {
        expect(index.driver({driver: "bebop"})).to.be.instanceOf(Driver);
      });
    });

    describe("piloting driver", function() {
      it("returns an instance of the piloting Driver", function() {
        expect(index.driver({driver: "piloting"})).to.be.instanceOf(Piloting);
      });
    });
  });

  describe("#adaptor", function() {
    it("returns an instance of the Adaptor", function() {
      expect(index.adaptor()).to.be.instanceOf(Adaptor);
    });
  });
});
