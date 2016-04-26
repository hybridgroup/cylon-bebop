/*
 * Cylonjs Bebop PictureSettings commands
 * http://cylonjs.com
 *
 * Copyright (c) 2016 The Hybrid Group
 * Licensed under the Apache 2.0 license.
*/

"use strict";

module.exports = [
  /**
   * Choose format for saved pictures
   *
   * @param {Number} type
   */
  "pictureFormatSelection",

  /**
   * Choose format for white balance
   *
   * @param {Number} type
   */
  "autoWhiteBalanceSelection",

  /**
   * Choose selection for exposition
   *
   * @param {Number} value
   */
  "expositionSelection",

  /**
   * Choose selection for saturation
   *
   * @param {Number} value
   */
  "saturationSelection",

  /**
   * Choose selection for time-lapse
   *
   * @param {Number} value
   */
  "timelapseSelection",

  /**
   * Choose selection for video auto-record
   *
   * @param {Boolean} enabled
   * @param {Number} massStorageId
   */
  "videoAutorecordSelection"
];
