/*
 * Cylonjs Bebop base commands
 * http://cylonjs.com
 *
 * Copyright (c) 2015 The Hybrid Group
 * Licensed under the Apache 2.0 license.
*/

"use strict";

module.exports = [
  /**
   * Tells Bebop to start flying by setting the internal 'fly' state to true.
   *
   * @param {Function} callback function to invoke once hovering
   * @return {Boolean}
   * @publish
   */
  "takeOff",

  /**
   * Tells Bebop to land by setting the internal 'fly' state to false.
   *
   * @param {Function} callback function to invoke once landed
   * @return {Boolean}
   * @publish
   */
  "land",

  /**
   * Sets all drone movement commands to 0, making it effectively hover in
   * place.
   *
   * @return {null}
   * @publish
   */
  "stop",

  /**
   * Tells the drone to start gaining altitude
   *
   * @param {Number} speed value from 0 to 1
   * @return {Number} set speed
   * @publish
   */
  "up",

  /**
   * Tells the drone to start losing altitude
   *
   * @param {Number} speed value from 0 to 1
   * @return {Number} set speed
   * @publish
   */
  "down",

  /**
   * Tells the drone to bank left - controlling the roll using the camera as
   * a reference point.
   *
   * @param {Number} speed value from 0 to 1
   * @return {Number} set speed
   * @publish
   */
  "left",

  /**
   * Tells the drone to bank right - controlling the roll using the camera as
   * a reference point.
   *
   * @param {Number} speed value from 0 to 1
   * @return {Number} set speed
   * @publish
   */
  "right",

  /**
   * Tells the drone to bank forward - controlling the pitch using the camera as
   * a reference point.
   *
   * @param {Number} speed value from 0 to 1
   * @return {Number} set speed
   * @publish
   */
  "forward",

  /**
   * Tells the drone to bank backwards - controlling the pitch using the camera
   * as a reference point.
   *
   * @param {Number} speed value from 0 to 1
   * @return {Number} set speed
   * @publish
   */
  "backward",

  /**
   * Tells the drone to begin spinning clockwise
   *
   * @param {Number} speed value from 0 to 1
   * @return {Number} set speed
   * @publish
   */
  "clockwise",

  /**
   * Tells the drone to begin spinning counterclockwise
   *
   * @param {Number} speed value from 0 to 1
   * @return {Number} set speed
   * @publish
   */
  "counterClockwise",

  /**
   * Tells the drone to frontFlip
   *
   * @return {Number} flip direction
   * @publish
   */
    "frontFlip",

  /**
   * Tells the drone to backFlip
   *
   * @return {Number} flip direction
   * @publish
   */
    "backFlip",

  /**
   * Tells drone to rightflip
   *
   * @return {Number} flip direction
   * @publish
   */
    "rightFlip",

  /**
   * Tells drone to leftflip
   *
   * @return {Number} flip direction
   * @publish
   */
    "leftFlip",

  /**
   * Tell the drone to drop like a stone.
   *
   * @return {string} buffer of emergency calls
   * @publish
   */
    "emergency"
];
