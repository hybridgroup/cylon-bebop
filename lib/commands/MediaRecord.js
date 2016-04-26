/*
 * Cylonjs Bebop MediaRecord commands
 * http://cylonjs.com
 *
 * Copyright (c) 2016 The Hybrid Group
 * Licensed under the Apache 2.0 license.
*/

"use strict";

module.exports = [
  /**
   * Takes a picture (older API)
   *
   * @param {Number} massStorageId
   * @publish
   */
  "picture",

  /**
   * Starts/stops video recording (older API)
   *
   * @param {Number} val
   * @publish
   */
  "video",

  /**
   * Takes a picture (current API)
   *
   * @publish
   */
  "pictureV2",

  /**
   * Starts/stops video recording (current API)
   *
   * @param {Number} record
   * @publish
   */
  "videoV2"
];
