/*
 * Cylonjs Bebop Mavlink commands
 * http://cylonjs.com
 *
 * Copyright (c) 2016 The Hybrid Group
 * Licensed under the Apache 2.0 license.
*/

"use strict";

module.exports = [
  /**
   * Starts autonavigation based on a Mavlink flight plan
   *
   * @param {String} filepath
   * @param {Number} type
   * @publish
   */
  "start",

  /**
   * Pauses the current flight plan
   *
   * @publish
   */
  "pause",

  /**
   * Stops autonavigation
   *
   * @publish
   */
  "stop"
];
