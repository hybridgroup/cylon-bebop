/*
 * Cylonjs Bebop commands
 * http://cylonjs.com
 *
 * Copyright (c) 2015 The Hybrid Group
 * Licensed under the Apache 2.0 license.
*/

"use strict";

module.exports = [
  // The default Bebop commands

  /**
   * Sets the internal fly state to true, callback is invoked
   * after the drone reports that it is hovering.
   *
   * callback - params
   *
   * @return {Boolean}
   * @publish
   */
  "takeOff",

  /**
   * Sets the internal fly state to false, callback is invoked
   * after the drone reports it has landed.
   *
   * callback - params
   *
   * @return {Boolean}
   * @publish
   */
  "land",

  /**
   * Sets all drone movement commands to 0,
   * making it effectively hover in place.
   *
   * @return {null}
   * @publish
   */
  "stop",

  /**
   * Makes the drone gain altitude.
   * speed can be a value from 0 to 1.
   *
   * speed - params
   *
   * @return {Number} value from 0 to 1
   * @publish
   */
  "up",

  /**
   * Makes the drone reduce altitude.
   * speed can be a value from 0 to 1.
   *
   * speed - params
   *
   * @returns {Number} value from 0 to 1
   * @publish
   */
  "down",

  /**
   * Causes the drone to bank to the left, controls the roll, which is
   * a horizontal movement using the camera as a reference point.
   * speed can be a value from 0 to 1.
   *
   * speed - params
   *
   * @return {Number} value from 0 to 1
   * @publish
   */
  "left",

  /**
   * Causes the drone to bank to the right, controls the roll, which is
   * a horizontal movement using the camera as a reference point.
   * speed can be a value from 0 to 1.
   *
   * speed - params
   *
   * @return {Number} value from 0 to 1
   * @publish
   */
  "right",

  /**
   * Causes the drone to bank forward, controls the pitch,
   * which a horizontal movement using the camera as a reference point.
   * speed can be a value from 0 to 1.
   *
   * speed - params
   * forward(speed) - params
   *
   * @returns {Number} value from 0 to 1
   * @publish
   */
  "forward",

  /**
   * Causes the drone to bank to the back, controls the pitch,
   * which a horizontal movement using the camera as a reference point.
   * speed can be a value from 0 to 1.
   *
   * speed - params
   *
   * @return {Number} value from 0 to 1
   * @publish
   */
  "backward",


  /**
   * Causes the drone to spin.
   * speed can be a value from 0 to 1.
   *
   * @return {Number} value from 0 to 1
   * @publish
   */
  "clockwise",

  /**
   * Causes the drone to spin.
   * speed can be a value from 0 to 1.
   *
   * @returns {Number} value from 0 to 1
   * @publish
   */
  "counterClockwise",
  "stop",
];
