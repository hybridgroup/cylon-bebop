"use strict";

var index = lib("../");

var Adaptor = lib("adaptor"),
    Driver = lib("driver");

describe("index", function() {
  describe("#adaptors", function() {
    it("is an array of supplied adaptors", function() {
      expect(index.adaptors).to.be.eql(["bebop"]);
    });
  });

  describe("#drivers", function() {
    it("is an array of supplied drivers", function() {
      expect(index.drivers).to.be.eql(["bebop",
                                       "animations",
                                       "calibration",
                                       "camera",
                                       "charger",
                                       "common",
                                       "gps",
                                       "gps-settings",
                                       "mavlink",
                                       "media-record",
                                       "media-streaming",
                                       "network",
                                       "network-settings",
                                       "overheat",
                                       "picture-settings",
                                       "piloting",
                                       "piloting-settings",
                                       "settings",
                                       "speed-settings",
                                       "wifi-settings"]);
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
  });

  describe("#adaptor", function() {
    it("returns an instance of the Adaptor", function() {
      expect(index.adaptor()).to.be.instanceOf(Adaptor);
    });
  });
});
