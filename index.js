"use strict";

var Adaptor = require("./lib/adaptor");

var Drivers = {
  "bebop": require("./lib/driver"),
  "piloting": require("./lib/piloting")
};

module.exports = {
  // Adaptors this module provides
  adaptors: ["bebop"],

  // Drivers this module provides
  drivers: Object.keys(Drivers),

  // Modules intended to be used with this module (currently none)
  dependencies: [],

  adaptor: function(opts) {
    return new Adaptor(opts);
  },

  driver: function(opts) {
    opts = opts || {};

    if (!Drivers[opts.driver]) {
      return null;
    }

    return new Drivers[opts.driver](opts);
  }
};
