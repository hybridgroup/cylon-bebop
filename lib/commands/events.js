/*
 * Cylonjs Bebop events
 * http://cylonjs.com
 *
 * Copyright (c) 2015-2016 The Hybrid Group
 * Licensed under the Apache 2.0 license.
*/

"use strict";

module.exports = [

  /**
   * Emits battery level percentage
   *
   * @event battery
   * @publish
   */
  "battery",

  /**
   * Emits one h.264 video frame
   *
   * @event video
   * @publish
   */
  "video",


  /**
   * Emitted when the drone has successfully connected
   *
   * @event ready
   * @publish
   */
  "ready",

  /**
   * Emitted when the drone is flying in the air
   *
   * @event flying
   * @publish
   */
  "flying",

  /**
   * Emitted when the drone is hovering in the air
   *
   * @event hovering
   * @publish
   */
  "hovering",

  /**
   * Emitted when the drone has landed on the ground
   *
   * @event landed
   * @publish
   */
  "landed",

  /**
   * Emitted when the drone is in the process of landing
   *
   * @event landing
   * @publish
   */
  "landing",

  /**
   * Emitted when the drone is in the process of taking off
   *
   * @event takingOff
   * @publish
   */
  "takingOff",

  /**
   * Emitted when the drone encounters an emergency condition
   *
   * @event emergency
   * @publish
   */
  "emergency"
];
