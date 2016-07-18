#!/usr/bin/env node
const fs = require('fs');
var bitmapReader = require('../lib/bitmap-reader');

var bitmap;

var bitmapCli = function(cb) {
  bitmapReader.read(bitmap);
  cb();
};

var createBitmap = function() {
  bitmapReader.transform(bitmap);
};

bitmapCli(createBitmap);
