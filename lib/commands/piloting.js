/*
 * Cylonjs Bebop piloting commands
 * http://cylonjs.com
 *
 * Copyright (c) 2016 The Hybrid Group
 * Licensed under the Apache 2.0 license.
*/

"use strict";

module.exports = [
  /**
   * Do a flat trim
   *
   * @param {Function} callback function to invoke once set
   * @return {Boolean}
   * @publish
   */
  "flatTrim",

  /**
   * TAsk the drone to take off
   *
   * @param {Function} callback function to invoke once hovering
   * @return {Boolean}
   * @publish
   */
  "takeOff",

  /**
   * Ask the drone to move around.
   *
   * @param {Object} opts flying options
   * @param {Boolean} opts.flag flag to activate roll/pitch movement
   * @param {Number} opts.roll Roll consign for the drone [-100;100]
   * @param {Number} opts.pitch Pitch consign for the drone [-100;100]
   * @param {Number} opts.yaw Yaw consign for the drone [-100;100]
   * @param {Number} opts.gaz Gaz consign for the drone [-100;100]
   * @param {Function} callback function to invoke once command sent
   * @return {Boolean}
   * @publish
   */
  "pcmd",

  /**
   * Ask the drone to land
   *
   * @param {Function} callback function to invoke once landed
   * @return {Null}
   * @publish
   */
  "landing",

  /**
   * Put drone in emergency user state
   *
   * @return {Null}
   * @publish
   */
  "emergency",


  /**
   * Ask the drone to fly to home
   *
   * @param {Number} start 1 to start the navigate home, 0 to stop it
   * @return {null}
   * @publish
   */
  "navigateHome"
];
