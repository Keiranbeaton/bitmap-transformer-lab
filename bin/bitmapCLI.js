#!/usr/bin/env node
var bitmapReader = require('../lib/bitmap-reader');
var bitmap;

var bitmapCli = function() {
  bitmapReader.read(bitmap);
};

bitmapCli();
