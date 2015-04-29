"use strict";

var Adaptor = require("./adaptor"),
    Driver = require("./driver");

module.exports = {
  // Adaptors your module provides, e.g. ["spark"]
  adaptors: ["bebop"],

  // Drivers your module provides, e.g. ["led", "button"]
  drivers: ["bebop"],

  // Modules intended to be used with yours, e.g. ["cylon-gpio"]
  dependencies: [],

  adaptor: function(opts) {
    return new Adaptor(opts);
  },

  driver: function(opts) {
    return new Driver(opts);
  }
};
