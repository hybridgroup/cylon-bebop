"use strict";

var Cylon = require("cylon"),
    Bebop = require("node-bebop"),
    BaseEvents = require("./commands/events"),
    BaseCommands = require("./commands/base"),
    Piloting = require("./commands/piloting");

var Adaptor = module.exports = function Adaptor(opts) {
  Adaptor.__super__.constructor.apply(this, arguments);
  opts = opts || {};
  this.connector = Bebop.createClient({host: opts.host});
  this.Piloting = {};
  this.events = BaseEvents;
};

Cylon.Utils.subclass(Adaptor, Cylon.Adaptor);

Adaptor.prototype.connect = function(callback) {
  this.proxyMethods(BaseCommands, this.connector, this);
  this.proxyMethods(Piloting, this.connector.Piloting, this.Piloting);

  this.events.forEach(function(name) {
    this.defineAdaptorEvent(name);
  }.bind(this));

  this.connector.connect(function() {
    callback();
  });
};

Adaptor.prototype.disconnect = function(callback) {
  callback();
};
