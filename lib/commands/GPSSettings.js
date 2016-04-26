/*
 * Cylonjs Bebop GPSSettings commands
 * http://cylonjs.com
 *
 * Copyright (c) 2016 The Hybrid Group
 * Licensed under the Apache 2.0 license.
*/

"use strict";

module.exports = [
  /**
   * Sets the home position for drone
   *
   * @param {Number} latitude
   * @param {Number} longitude
   * @param {Number} altitude
   * @publish
   */
  "setHome",

  /**
   * Reset the home position for drone
   *
   * @publish
   */
  "resetHome",

  /**
   * Sets the home position for controller
   *
   * @param {Number} latitude
   * @param {Number} longitude
   * @param {Number} altitude
   * @param {Number} horizontalAccuracy
   * @param {Number} verticalAccuracy
   * @publish
   */
  "sendControllerGPS",

  /**
   * Sets the home type
   *
   * @param {Number} type
   * @publish
   */
  "homeType",

  /**
   * Sets the delay before the drone returns home
   *
   * @param {Number} delay
   * @publish
   */
  "returnHomeDelay",
];
