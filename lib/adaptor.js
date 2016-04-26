"use strict";

var Cylon = require("cylon"),
    Bebop = require("node-bebop"),
    BaseEvents = require("./commands/events"),
    BaseCommands = require("./commands/base");

var Commandsets = [
  "Animations",
  "Calibration",
  "Camera",
  "Charger",
  "Common",
  "GPS",
  "GPSSettings",
  "MediaRecord",
  "MediaStreaming",
  "Network",
  "NetworkSettings",
  "OverHeat",
  "PictureSettings",
  "Piloting",
  "PilotingSettings",
  "Settings",
  "SpeedSettings",
  "WifiSettings"
];

var Adaptor = module.exports = function Adaptor(opts) {
  Adaptor.__super__.constructor.apply(this, arguments);
  opts = opts || {};
  this.connector = Bebop.createClient({host: opts.host});
  this.events = BaseEvents;

  Commandsets.forEach(function(name) {
    this[name] = {};
  }.bind(this));
};

Cylon.Utils.subclass(Adaptor, Cylon.Adaptor);

Adaptor.prototype.connect = function(callback) {
  this.proxyMethods(BaseCommands, this.connector, this);

  Commandsets.forEach(function(name) {
    this.proxyMethods(require("./commands/" + name),
                      this.connector[name],
                      this[name]);
  }.bind(this));

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
