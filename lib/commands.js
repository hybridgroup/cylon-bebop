"use strict";

var Cylon = require("cylon");
var bebopDevices = {
  animations: {
    name: "Animations",
    commands: require("./commands/Animations")
  },
  calibration: {
    name: "Calibration",
    commands: require("./commands/Calibration")
  },
  camera: {
    name: "Camera",
    commands: require("./commands/Camera")
  },
  charger: {
    name: "Charger",
    commands: require("./commands/Charger")
  },
  common: {
    name: "Common",
    commands: require("./commands/Common")
  },
  gps: {
    name: "GPS",
    commands: require("./commands/GPS")
  },
  "gps-settings": {
    name: "GPSSettings",
    commands: require("./commands/GPSSettings")
  },
  "media-streaming": {
    name: "MediaStreaming",
    commands: require("./commands/MediaStreaming")
  },
  "media-record": {
    name: "MediaRecord",
    commands: require("./commands/MediaRecord")
  },
  network: {
    name: "Network",
    commands: require("./commands/Network")
  },
  "network-settings": {
    name: "NetworkSettings",
    commands: require("./commands/NetworkSettings")
  },
  overheat: {
    name: "OverHeat",
    commands: require("./commands/OverHeat")
  },
  "picture-settings": {
    name: "PictureSettings",
    commands: require("./commands/PictureSettings")
  },
  piloting: {
    name: "Piloting",
    commands: require("./commands/Piloting")
  },
  "piloting-settings": {
    name: "PilotingSettings",
    commands: require("./commands/PilotingSettings")
  },
  settings: {
    name: "Settings",
    commands: require("./commands/Settings")
  },
  "speed-settings": {
    name: "SpeedSettings",
    commands: require("./commands/SpeedSettings")
  },
  "wifi-settings": {
    name: "WifiSettings",
    commands: require("./commands/WifiSettings")
  },
};

var bebopDevice = module.exports = function(opts) {
  bebopDevice.__super__.constructor.apply(this, arguments);

  this.driverName = opts.driver;
};

Cylon.Utils.subclass(bebopDevice, Cylon.Driver);

bebopDevice.prototype.start = function(callback) {
  this.setupCommands(bebopDevices[this.driverName].commands,
                     this.connection[bebopDevices[this.driverName].name]);

  callback();
};

bebopDevice.prototype.halt = function(callback) {
  callback();
};
