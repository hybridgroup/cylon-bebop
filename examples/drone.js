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
    my.drone.takeOff();
    after((5).seconds(), my.drone.land);
  }
}).start();
