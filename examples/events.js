"use strict";

var Cylon = require("cylon");

Cylon.robot({
  connections: {
    bebop: { adaptor: "bebop" }
  },

  devices: {
    drone: { driver: "bebop" }
  },

  work: function(my) {
    my.drone.on("ready", function() {
      console.log("ready...")
    });

    my.drone.on("takingOff", function() {
      console.log("taking off...")
    });

    my.drone.on("landing", function() {
      console.log("landing...")
    });

    my.drone.on("landed", function() {
      console.log("landed.")
    });

    my.drone.takeOff();
    after((5).seconds(), my.drone.land);
  }
}).start();
