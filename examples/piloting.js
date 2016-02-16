"use strict";

var Cylon = require("cylon");

Cylon.robot({
  connections: {
    bebop: { adaptor: "bebop" }
  },

  devices: {
    drone: { driver: "piloting" }
  },

  work: function(my) {
    my.drone.takeOff();
    after((5).seconds(), my.drone.landing);
  }
}).start();
