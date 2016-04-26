"use strict";

var Cylon = require("cylon");

Cylon.robot({
  connections: {
    bebop: { adaptor: "bebop" }
  },

  devices: {
    drone: { driver: "piloting" },
    video: { driver: "media-streaming"}
  },

  work: function(my) {
    my.video.videoEnable(1);
    my.drone.takeOff();
    after((5).seconds(), my.drone.landing);
  }
}).start();
