# Cylon.js For Bebop

Cylon.js (http://cylonjs.com) is a JavaScript framework for robotics, physical computing and the Internet of Things.

This module provides an adaptor/driver for the [Parrot Bebop](http://www.parrot.com/products/bebop-drone/) drone.

The implementation uses the [`node-bebop`](https://github.com/hybridgroup/node-bebop) node module from [@hybridgroup](https://github.com/hybridgroup).

Want to use Ruby on robots? Check out our sister project Artoo (http://artoo.io)

Want to use the Go programming language to power your robots? Check out our sister project Gobot (http://gobot.io).

[![Build Status](https://secure.travis-ci.org/hybridgroup/cylon-bebop.png?branch=master)](http://travis-ci.org/hybridgroup/cylon-bebop) [![Code Climate](https://codeclimate.com/github/hybridgroup/cylon-bebop/badges/gpa.svg)](https://codeclimate.com/github/hybridgroup/cylon-bebop) [![Test Coverage](https://codeclimate.com/github/hybridgroup/cylon-bebop/badges/coverage.svg)](https://codeclimate.com/github/hybridgroup/cylon-bebop)

## How to Install

    $ npm install cylon cylon-bebop

## How to Use

```javascript
var Cylon = require('cylon');

Cylon.robot({
  connections: {
    bebop: { adaptor: 'bebop' }
  },

  devices: {
    drone: { driver: 'bebop' }
  },

  work: function(my) {
    my.drone.takeOff();
    after((5).seconds(), my.drone.land);
  }
}).start();
```

## How to Connect

The Bebop is a WiFi device, and by default it is configured to act as a WiFi access point. To connect to a single drone just connect your computer's WiFi to the drone's WiFi. The default name for the Bebop's access point will include "Bebop" in its name.

## Documentation

We're busy adding documentation to our web site at http://cylonjs.com/ please check there as we continue to work on Cylon.js

Thank you!

## Contributing

For our contribution guidelines, please go to [https://github.com/hybridgroup/cylon/blob/master/CONTRIBUTING.md
](https://github.com/hybridgroup/cylon/blob/master/CONTRIBUTING.md
).

## Release History

For the release history, please go to [https://github.com/hybridgroup/cylon-bebop/blob/master/RELEASES.md
](https://github.com/hybridgroup/cylon-bebop/blob/master/RELEASES.md
).

## License
Copyright (c) 2013-2016 The Hybrid Group. Licensed under the Apache 2.0 license.
