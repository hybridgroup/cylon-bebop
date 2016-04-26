/*
 * Cylonjs Bebop PilotingSettings commands
 * http://cylonjs.com
 *
 * Copyright (c) 2016 The Hybrid Group
 * Licensed under the Apache 2.0 license.
*/

"use strict";

module.exports = [
  /**
   * Set maximum altitude during manual flight
   *
   * @param {Number} current
   */
  "maxAltitude",

  /**
   * Set maximum tilt during manual flight
   *
   * @param {Number} current
   */
  "maxTilt",

  /**
   * Set absolute control during manual flight
   *
   * @param {Number} on
   */
  "absolutControl",

  /**
   * Set maximum distance from controller during manual flight
   *
   * @param {Number} value
   */
  "maxDistance",

  /**
   * Set maximum distance covered for manual flight
   *
   * @param {Number} shouldNotFlyOver
   */
  "noFlyOverMaxDistance",

  /**
   * Set maximum horizontal speed during autonomous flight
   *
   * @param {Number} value
   */
  "setAutonomousFlightMaxHorizontalSpeed",

  /**
   * Set maximum vertical speed during autonomous flight
   *
   * @param {Number} value
   */
  "setAutonomousFlightMaxVerticalSpeed",

  /**
   * Set maximum horizontal acceleration during autonomous flight
   *
   * @param {Number} value
   */
  "setAutonomousFlightMaxHorizontalAcceleration",

  /**
   * Set maximum vertical acceleration during autonomous flight
   *
   * @param {Number} value
   */
  "setAutonomousFlightMaxVerticalAcceleration",

  /**
   * Set maximum rotation speed during autonomous flight
   *
   * @param {Number} value
   */
  "setAutonomousFlightMaxRotationSpeed"
];
