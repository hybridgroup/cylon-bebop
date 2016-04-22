"use strict";

var Cylon = require("cylon"),
    PilotingCommands = require("./commands/piloting");

var Piloting = module.exports = function Piloting(opts) {
  Piloting.__super__.constructor.apply(this, arguments);
  opts = opts || {};
};

Cylon.Utils.subclass(Piloting, Cylon.Driver);

Piloting.prototype.start = function(callback) {
  this.setupCommands(PilotingCommands, this.connection.Piloting);
  callback();
};

Piloting.prototype.halt = function(callback) {
  callback();
};
