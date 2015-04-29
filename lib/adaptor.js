"use strict";

var Cylon = require("cylon"),
    Bebop = require("node-bebop"),
    Commands = require("./commands");

var Adaptor = module.exports = function Adaptor(opts) {
  Adaptor.__super__.constructor.apply(this, arguments);
  opts = opts || {};
  this.connector = Bebop.createClient({host: opts.host});
};

Cylon.Utils.subclass(Adaptor, Cylon.Adaptor);

Adaptor.prototype.connect = function(callback) {

  this.proxyMethods(Commands, this.connector, this);

  this.connector.connect(function() {
    callback();
  });
};

Adaptor.prototype.disconnect = function(callback) {
  callback();
};
