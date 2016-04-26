"use strict";

var Adaptor = require("./lib/adaptor");
var Bebop = require("./lib/driver");
var Commandset = require("./lib/commands")

module.exports = {
  // Adaptors this module provides
  adaptors: ["bebop"],

  // Drivers this module provides
  drivers: ["bebop",
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
            "wifi-settings"],

  // Modules intended to be used with this module (currently none)
  dependencies: [],

  adaptor: function(opts) {
    return new Adaptor(opts);
  },

  driver: function(opts) {
    opts = opts || {};

    if (opts.driver === "bebop") {
      return new Bebop(opts);
    }
    return new Commandset(opts);
  }
};
