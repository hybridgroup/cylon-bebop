"use strict";

var Cylon = require("cylon"),
    BaseCommands = require("./commands/base"),
    BaseEvents = require("./commands/events");

var Driver = module.exports = function Driver(opts) {
  Driver.__super__.constructor.apply(this, arguments);
  opts = opts || {};
  this.setupCommands(BaseCommands);
  this.events = BaseEvents;
};

Cylon.Utils.subclass(Driver, Cylon.Driver);

Driver.prototype.start = function(callback) {
  this.events.forEach(function(e) {
    this.defineDriverEvent({ eventName: e });
  }.bind(this));

  callback();
};

Driver.prototype.halt = function(callback) {
  callback();
};
