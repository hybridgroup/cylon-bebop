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

* All patches must be provided under the Apache 2.0 License
* Please use the -s option in git to "sign off" that the commit is your work and you are providing it under the Apache 2.0 License
* Submit a Github Pull Request to the appropriate branch and ideally discuss the changes with us in IRC.
* We will look at the patch, test it out, and give you feedback.
* Avoid doing minor whitespace changes, renamings, etc. along with merged content. These will be done by the maintainers from time to time but they can complicate merges and should be done seperately.
* Take care to maintain the existing coding style.
* Add unit tests for any new or changed functionality & Lint and test your code using [make](http://www.gnu.org/software/make/).
* All pull requests should be "fast forward"
  * If there are commits after yours use “git rebase -i <new_head_branch>”
  * If you have local changes you may need to use “git stash”

## Release History
None yet...

## License
Copyright (c) 2013-2015 The Hybrid Group. Licensed under the Apache 2.0 license.
