"use strict";

var Cylon = require("cylon"),
    Piloting = require("./commands/piloting");

var Driver = module.exports = function Driver(opts) {
  Driver.__super__.constructor.apply(this, arguments);
  opts = opts || {};
};

Cylon.Utils.subclass(Driver, Cylon.Driver);

Driver.prototype.start = function(callback) {
  this.setupCommands(Piloting, this.connection.Piloting);
  callback();
};

Driver.prototype.halt = function(callback) {
  callback();
};
