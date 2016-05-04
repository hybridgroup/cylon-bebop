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
  "emergency",


  // Low level events
  /**
   * @deprecated State of picture recording
   *
   * @event PictureStateChanged
   * @publish
   */
  "PictureStateChanged",

  /**
   * @deprecated State of video recording
   *
   * @event VideoStateChanged
   * @publish
   */
  "VideoStateChanged",

  /**
   * State of device picture recording changed
   *
   * @event PictureStateChangedV2
   * @publish
   */
  "PictureStateChangedV2",

  /**
   * State of device video recording changed
   *
   * @event VideoStateChangedV2
   * @publish
   */
  "VideoStateChangedV2",

  /**
   * Event of picture recording
   *
   * @event PictureEventChanged
   * @publish
   */
  "PictureEventChanged",

  /**
   * Event of video recording
   *
   * @event VideoEventChanged
   * @publish
   */
   "VideoEventChanged",

  /**
   * Drone acknowledges that flat trim was correctly processed
   *
   * @event FlatTrimChanged
   * @publish
   */
  "FlatTrimChanged",

  /**
   * Drone flying state changed
   *
   * @event FlyingStateChanged
   * @publish
   */
  "FlyingStateChanged",

  /**
   * Drone alert state changed
   *
   * @event AlertStateChanged
   * @publish
   */
  "AlertStateChanged",

  /**
   * Navigating home state
   *
   * @event NavigateHomeStateChanged
   * @publish
   */
  "NavigateHomeStateChanged",

  /**
   * Drone position changed
   *
   * @event PositionChanged
   * @publish
   */
  "PositionChanged",

  /**
   * Drone speed changed
   *
   * @event SpeedChanged
   * @publish
   */
  "SpeedChanged",

  /**
   * Drone attitude changed
   *
   * @event AttitudeChanged
   * @publish
   */
  "AttitudeChanged",

  /**
   * Status of the drone3 automatic take off mode
   *
   * @event AutoTakeOffModeChanged
   * @publish
   */
  "AutoTakeOffModeChanged",

  /**
   * Drone altitude changed
   *
   * @event AltitudeChanged
   * @publish
   */
  "AltitudeChanged",

  /**
   * One scanning result found
   *
   * @event WifiScanListChanged
   * @publish
   */
  "WifiScanListChanged",

  /**
   * State sent when all scanning result sent
   *
   * @event AllWifiScanChanged
   * @publish
   */
  "AllWifiScanChanged",

  /**
   * Notify of an Authorized Channel
   *
   * @event WifiAuthChannelListChanged
   * @publish
   */
  "WifiAuthChannelListChanged",

  /**
   * Notify the end of the list of Authorized wifi Channel
   *
   * @event AllWifiAuthChannelChanged
   * @publish
   */
  "AllWifiAuthChannelChanged",

  /**
   * Max Altitude sent by product
   *
   * @event MaxAltitudeChanged
   * @publish
   */
  "MaxAltitudeChanged",

  /**
   * Max tilt sent by product
   *
   * @event MaxTiltChanged
   * @publish
   */
  "MaxTiltChanged",

  /**
   * Absolut control boolean sent by product
   *
   * @event AbsolutControlChanged
   * @publish
   */
  "AbsolutControlChanged",

  /**
   * Max distance sent by the drone
   *
   * @event MaxDistanceChanged
   * @publish
   */
  "MaxDistanceChanged",

  /**
   * Indication about how the product handles flying over the max
   * distance limitation
   *
   * @event NoFlyOverMaxDistanceChanged
   * @publish
   */
  "NoFlyOverMaxDistanceChanged",

  /**
   * Maximum horizontal speed used by the autonomous flight
   *
   * @event AutonomousFlightMaxHorizontalSpeed
   * @publish
   */
  "AutonomousFlightMaxHorizontalSpeed",

  /**
   * Maximum vertical speed used by the autonomous flight
   *
   * @event AutonomousFlightMaxVerticalSpeed
   * @publish
   */
  "AutonomousFlightMaxVerticalSpeed",

  /**
   * Maximum horizontal acceleration used by the autonomous flight
   *
   * @event AutonomousFlightMaxHorizontalAcceleration
   * @publish
   */
  "AutonomousFlightMaxHorizontalAcceleration",

  /**
   * Maximum vertical acceleration used by the autonomous flight
   *
   * @event AutonomousFlightMaxVerticalAcceleration
   * @publish
   */
  "AutonomousFlightMaxVerticalAcceleration",

  /**
   * Maximum yaw rotation speed used by the autonomous flight
   *
   * @event AutonomousFlightMaxRotationSpeed
   * @publish
   */
  "AutonomousFlightMaxRotationSpeed",

  /**
   * Max vertical speed sent by product
   *
   * @event MaxVerticalSpeedChanged
   * @publish
   */
  "MaxVerticalSpeedChanged",

  /**
   * Max rotation speed sent by product
   *
   * @event MaxRotationSpeedChanged
   * @publish
   */
  "MaxRotationSpeedChanged",

  /**
   * Presence of hull protection sent by product
   *
   * @event HullProtectionChanged
   * @publish
   */
  "HullProtectionChanged",

  /**
   * Outdoor property sent by product
   *
   * @event OutdoorChanged
   * @publish
   */
  "OutdoorChanged",

  /**
   * Wifi selection from product
   *
   * @event WifiSelectionChanged
   * @publish
   */
  "WifiSelectionChanged",

  /**
   * @deprecated Product Motor version (the first argument is the
   * unique identifier for the list)
   *
   * @event ProductMotorVersionListChanged
   * @publish
   */
  "ProductMotorVersionListChanged",

  /**
   * Product GPS versions
   *
   * @event ProductGPSVersionChanged
   * @publish
   */
  "ProductGPSVersionChanged",

  /**
   * Motor status change
   *
   * @event MotorErrorStateChanged
   * @publish
   */
  "MotorErrorStateChanged",

  /**
   * Motor software version status
   *
   * @event MotorSoftwareVersionChanged
   * @publish
   */
  "MotorSoftwareVersionChanged",

  /**
   * Motor flights status
   *
   * @event MotorFlightsStatusChanged
   * @publish
   */
  "MotorFlightsStatusChanged",

  /**
   * Motor status about last error
   *
   * @event MotorErrorLastErrorChanged
   * @publish
   */
  "MotorErrorLastErrorChanged",

  /**
   * The format of the photo
   *
   * @event PictureFormatChanged
   * @publish
   */
  "PictureFormatChanged",

  /**
   * AutoWhiteBalance mode
   *
   * @event AutoWhiteBalanceChanged
   * @publish
   */
  "AutoWhiteBalanceChanged",

  /**
   * The exposition of the image
   *
   * @event ExpositionChanged
   * @publish
   */
  "ExpositionChanged",

  /**
   * The saturation of the image
   *
   * @event SaturationChanged
   * @publish
   */
  "SaturationChanged",

  /**
   * Picture taken periodically
   *
   * @event TimelapseChanged
   * @publish
   */
  "TimelapseChanged",

  /**
   * Video autorecord
   *
   * @event VideoAutorecordChanged
   * @publish
   */
  "VideoAutorecordChanged",

  /**
   * Return video streaming status
   *
   * @event VideoEnableChanged
   * @publish
   */
  "VideoEnableChanged",

  /**
   * Return home status
   *
   * @event HomeChanged
   * @publish
   */
  "HomeChanged",

  /**
   * Reset home status
   *
   * @event ResetHomeChanged
   * @publish
   */
  "ResetHomeChanged",

  /**
   * GPS fix state
   *
   * @event GPSFixStateChanged
   * @publish
   */
  "GPSFixStateChanged",

  /**
   * GPS update state
   *
   * @event GPSUpdateStateChanged
   * @publish
   */
  "GPSUpdateStateChanged",

  /**
   * State of the type of the home position. This type is the
   * user preference. The prefered home type may not be available,
   * see HomeTypeStatesChanged to get the drone home type.
   *
   * @event HomeTypeChanged
   * @publish
   */
  "HomeTypeChanged",

  /**
   * State of the delay after which the drone will
   * automatically try to return home
   *
   * @event ReturnHomeDelayChanged
   * @publish
   */
  "ReturnHomeDelayChanged",

  /**
   * Camera orientation
   *
   * @event Orientation
   * @publish
   */
  "Orientation",

  /**
   * Orientation of the camera center. This is the value to send when we want
   * to center the camera.
   *
   * @event DefaultCameraOrientation
   * @publish
   */
  "DefaultCameraOrientation",

  /**
   * Electric frequency of the country determined by the position
   * of the controller
   *
   * @event ElectricFrequencyChanged
   * @publish
   */
  "ElectricFrequencyChanged",

  /**
   * Anti flickering mode
   *
   * @event ModeChanged
   * @publish
   */
  "ModeChanged",

  /**
   * The number of satellite used to compute the gps position
   *
   * @event NumberOfSatelliteChanged
   * @publish
   */
  "NumberOfSatelliteChanged",

  /**
   * Availability of the return home types in a map : for each type
   * other args will be sent by the drone
   *
   * @event HomeTypeAvailabilityChanged
   * @publish
   */
  "HomeTypeAvailabilityChanged",

  /**
   * The return home type chosen
   *
   * @event HomeTypeChosenChanged
   * @publish
   */
  "HomeTypeChosenChanged",

  /**
   * Features enabled
   *
   * @event Features
   * @publish
   */
  "Features",

  /**
   * Signals the remote that the host will disconnect and close its
   * libARNetwork instance (and all threads that use libARNetwork)
   *
   * @event Disconnection
   * @publish
   */
  "Disconnection",

  /**
   * State sent when all settings has been sent.
   *
   * @event AllSettingsChanged
   * @publish
   */
  "AllSettingsChanged",

  /**
   * State sent when all settings has been resetting.
   *
   * @event ResetChanged
   * @publish
   */
  "ResetChanged",

  /**
   * Product name
   *
   * @event ProductNameChanged
   * @publish
   */
  "ProductNameChanged",

  /**
   * Product versions
   *
   * @event ProductVersionChanged
   * @publish
   */
  "ProductVersionChanged",

  /**
   * Product serial number
   *
   * @event ProductSerialHighChanged
   * @publish
   */
  "ProductSerialHighChanged",

  /**
   * Product serial number
   *
   * @event ProductSerialLowChanged
   * @publish
   */
  "ProductSerialLowChanged",

  /**
   * Inform current Country set in product. (Answer to 'Country' command)
   *
   * @event CountryChanged
   * @publish
   */
  "CountryChanged",

  /**
   * Inform Auto Country Settings
   *
   * @event AutoCountryChanged
   * @publish
   */
  "AutoCountryChanged",

  /**
   * Get all product states
   *
   * @event AllStates
   * @publish
   */
  "AllStates",

  /**
   * State sent when all product states has been sent
   *
   * @event AllStatesChanged
   * @publish
   */
  "AllStatesChanged",

  /**
   * Battery state
   *
   * @event BatteryStateChanged
   * @publish
   */
  "BatteryStateChanged",

  /**
   * Mass storage state list
   *
   * @event MassStorageStateListChanged
   * @publish
   */
  "MassStorageStateListChanged",

  /**
   * Mass storage info state list
   *
   * @event MassStorageInfoStateListChanged
   * @publish
   */
  "MassStorageInfoStateListChanged",

  /**
   * Current date state
   *
   * @event CurrentDateChanged
   * @publish
   */
  "CurrentDateChanged",

  /**
   * Current time state
   *
   * @event CurrentTimeChanged
   * @publish
   */
  "CurrentTimeChanged",

  /**
   * Mass storage info remaining list
   *
   * @event MassStorageInfoRemainingListChanged
   * @publish
   */
  "MassStorageInfoRemainingListChanged",

  /**
   * Wifi Signal between controller and product state
   *
   * @event WifiSignalChanged
   * @publish
   */
  "WifiSignalChanged",

  /**
   * Sensors states list
   *
   * @event SensorsStatesListChanged
   * @publish
   */
  "SensorsStatesListChanged",

  /**
   * Inform of the product model. This is used to customize the UI depending
   * on the connected product.
   *
   * @event ProductModel
   * @publish
   */
  "ProductModel",

  /**
   * List of the countries known by the device
   *
   * @event CountryListKnown
   * @publish
   */
  "CountryListKnown",

  /**
   * Overheat temperature reached
   *
   * @event OverHeatChanged
   * @publish
   */
  "OverHeatChanged",

  /**
   * Overheat regulation state changed
   *
   * @event OverHeatRegulationChanged
   * @publish
   */
  "OverHeatRegulationChanged",

  /**
   * Tell the device when the controller application enters/leaves
   * the piloting HUD.
   *
   * @event IsPilotingChanged
   * @publish
   */
  "IsPilotingChanged",

  /**
   * Status of the wifi config : either indoor or outdoor
   *
   * @event OutdoorSettingsChanged
   * @publish
   */
  "OutdoorSettingsChanged",

  /**
   * Playing state of a mavlink flight plan
   *
   * @event MavlinkFilePlayingStateChanged
   * @publish
   */
  "MavlinkFilePlayingStateChanged",

  /**
   * FlightPlan play state error
   *
   * @event MavlinkPlayErrorStateChanged
   * @publish
   */
  "MavlinkPlayErrorStateChanged",

  /**
   * Sent when the state of the magneto calibration has changed
   *
   * @event MagnetoCalibrationStateChanged
   * @publish
   */
  "MagnetoCalibrationStateChanged",

  /**
   * @deprecated State of picture recording
   *
   * Status of the calibration requirement
   * @publish
   */
  "MagnetoCalibrationRequiredState",

  /**
   * Event sent by a product to inform about the axis to calibrate
   *
   * @event MagnetoCalibrationAxisToCalibrateChanged
   * @publish
   */
  "MagnetoCalibrationAxisToCalibrateChanged",

  /**
   * Status of the calibration process
   *
   * @event MagnetoCalibrationStartedChanged
   * @publish
   */
  "MagnetoCalibrationStartedChanged",

  /**
   * Status of the camera settings
   *
   * @event CameraSettingsChanged
   * @publish
   */
  "CameraSettingsChanged",

  /**
   * State of availability to run a flight plan file
   *
   * @event AvailabilityStateChanged
   * @publish
   */
  "AvailabilityStateChanged",

  /**
   * List of state of drone flightPlan components
   *
   * @event ComponentStateListChanged
   * @publish
   */
  "ComponentStateListChanged",

  /**
   * Event of flight plan start error
   *
   * @event StartingErrorEvent
   * @publish
   */
  "StartingErrorEvent",

  /**
   * Bridle speed of the drone
   *
   * @event SpeedBridleEvent
   * @publish
   */
  "SpeedBridleEvent",

  /**
   * Controller libARCommands version
   *
   * @event ControllerLibARCommandsVersion
   * @publish
   */
  "ControllerLibARCommandsVersion",

  /**
   * SkyController libARCommands version
   *
   * @event SkyControllerLibARCommandsVersion
   * @publish
   */
  "SkyControllerLibARCommandsVersion",

  /**
   * Device libARCommands version
   *
   * @event DeviceLibARCommandsVersion
   * @publish
   */
  "DeviceLibARCommandsVersion",

  /**
   * Notify the controller whether the audio streaming is running
   *
   * @event AudioStreamingRunning
   * @publish
   */
  "AudioStreamingRunning",

  /**
   * Notify the intensity values for headlight LEDs
   *
   * @event IntensityChanged
   * @publish
   */
  "IntensityChanged",

  /**
   * List of supported accessories
   *
   * @event SupportedAccessoriesListChanged
   * @publish
   */
  "SupportedAccessoriesListChanged",

  /**
   * Accessory config response
   *
   * @event AccessoryConfigChanged
   * @publish
   */
  "AccessoryConfigChanged",

  /**
   * Possibility to modify the accessory configuration.
   *
   * @event AccessoryConfigModificationEnabled
   * @publish
   */
  "AccessoryConfigModificationEnabled",

  /**
   * @deprecated The maximum charge rate reported by the firmware.
   *
   * @event MaxChargeRateChanged
   * @publish
   */
  "MaxChargeRateChanged",

  /**
   * @deprecated The charge status of the battery changed
   *
   * @event CurrentChargeStateChanged
   * @publish
   */
  "CurrentChargeStateChanged",

  /**
   * @deprecated The charge rate of the last charge sent by the firmware
   *
   * @event LastChargeRateChanged
   * @publish
   */
  "LastChargeRateChanged",

  /**
   * Information of the charge
   *
   * @event ChargingInfo
   * @publish
   */
  "ChargingInfo"
];
