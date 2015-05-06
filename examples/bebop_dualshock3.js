var cylon = require("cylon");

cylon.robot({
  connections: {
    joystick: { adaptor: "joystick" },
    bebop:  { adaptor: 'bebop' }
  },
  devices: {
    controller: { driver: "dualshock-3", connection: "joystick" },
    drone:      { driver: "bebop", connection: "bebop" }
  },
  work: function() {
    var that = this,
        rightStick = { x: 0.0, y: 0.0 },
        leftStick = { x: 0.0, y: 0.0 };

    that.controller.on("square:press", function() {
      that.drone.takeOff();
    });

    that.controller.on("triangle:press", function() {
      that.drone.stop();
    });

    that.controller.on("x:press", function() {
      that.drone.land();
    });

    that.controller.on("right_x:move", function(data) {
      rightStick.x = data;
    });

    that.controller.on("right_y:move", function(data) {
      rightStick.y = data;
    });

    that.controller.on("left_x:move", function(data) {
      leftStick.x = data;
    });

    that.controller.on("left_y:move", function(data) {
      leftStick.y = data;
    });

    setInterval(function() {
      var pair = leftStick;

      if (pair.y < 0) {
        that.drone.forward(validatePitch(pair.y));
      } else if (pair.y > 0) {
        that.drone.backward(validatePitch(pair.y));
      }

      if (pair.x > 0) {
        that.drone.right(validatePitch(pair.x));
      } else if (pair.x < 0) {
        that.drone.left(validatePitch(pair.x));
      }
    }, 0);

    setInterval(function() {
      var pair = rightStick;

      if (pair.y < 0) {
        that.drone.up(validatePitch(pair.y));
      } else if (pair.y > 0) {
        that.drone.down(validatePitch(pair.y));
      }

      if (pair.x > 0) {
        that.drone.clockwise(validatePitch(pair.x));
      } else if (pair.x < 0) {
        that.drone.counterClockwise(validatePitch(pair.x));
      }
    }, 0);

    setInterval(function() {
      that.drone.stop();
    }, 10);
  }
}).start();

function validatePitch(data) {
  var value = Math.abs(data);
  if (value >= 0.1) {
    if (value <= 1.0) {
      return Math.round(value * 100);
    } else {
      return 100;
    }
  } else {
    return 0;
  }
}
