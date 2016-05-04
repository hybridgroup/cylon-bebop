"use strict";

var Cylon = require("cylon");

Cylon.robot({
  connections: (function() {
    var connections = {
        keyboard: { adaptor: "keyboard" },
        bebop: { adaptor: "bebop" },
    };
    return connections;
  })(),

  devices: (function() {
    var devices = {
        keyboard: { driver: "keyboard", connection: "keyboard" },
        drone: { driver: "bebop", connection: "bebop" },
        stream: { driver: "media-streaming", connection: "bebop" },
        record: { driver: "media-record", connection: "bebop" }
    };
    return devices;
  })(),

  work: function(my) {
    my.drone.on("PictureEventChanged", function(data) {
      console.log("PictureEventChanged", data);
    });

    my.drone.on("ready", function() {
      console.log("ready...");
      my.record.picture(0);
    });
  },
}).start();
