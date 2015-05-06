/*
 * Cylonjs Bebop commands
 * http://cylonjs.com
 *
 * Copyright (c) 2015 The Hybrid Group
 * Licensed under the Apache 2.0 license.
*/

module.exports = [
  // The default Bebop commands

  // Public: Sets the internal fly state to true, callback is invoked 
  // after the drone reports that it is hovering.
  //
  // callback - params
  //
  // Returns true | nil
  "takeOff",

  // Public: Sets the internal fly state to false, callback is invoked 
  // after the drone reports it has landed.
  //
  // callback - params
  //
  // Returns true | nil
  "land",

  // Public: Sets all drone movement commands to 0, 
  // making it effectively hover in place.
  //
  // Returns nil
  "stop",

  // Public: Makes the drone gain altitude.
  // speed can be a value from 0 to 1.
  //
  // speed - params
  //
  // Returns value from 0 to 1
  "up",

  // Public: Makes the drone reduce altitude.
  // speed can be a value from 0 to 1.
  //
  // speed - params
  //
  // Returns value from 0 to 1
  "down",

  // Public: Causes the drone to bank to the left, controls the roll, which is 
  // a horizontal movement using the camera as a reference point.
  // speed can be a value from 0 to 1.
  //
  // speed - params
  //
  // Returns value from 0 to 1
  "left",

  // Public: Causes the drone to bank to the right, controls the roll, which is 
  // a horizontal movement using the camera as a reference point.
  // speed can be a value from 0 to 1.
  //
  // speed - params
  //
  // Returns value from 0 to 1
  "right",

  // Public: Causes the drone to bank forward, controls the pitch, 
  // which a horizontal movement using the camera as a reference point.
  // speed can be a value from 0 to 1.
  //
  // speed - params
  // forward(speed) - params
  //
  // Returns value from 0 to 1
  "forward",

  // Public: Causes the drone to bank to the back, controls the pitch, 
  // which a horizontal movement using the camera as a reference point.
  // speed can be a value from 0 to 1.
  //
  // speed - params
  //
  // Returns value from 0 to 1
  "backward",


  // Public: Causes the drone to spin.
  // speed can be a value from 0 to 1.
  //
  // Returns value from 0 to 1
  "clockwise",

  // Public: Causes the drone to spin.
  // speed can be a value from 0 to 1.
  //
  // Returns value from 0 to 1
  "counterClockwise",
  "stop",
];
