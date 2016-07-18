const fs = require('fs');
var bitmapReader = module.exports = exports = {};
var value1 = 0;
var value2 = 0;
var value3 = 0;
var greyValue = 0;

bitmapReader.read = function(buffer) {
  buffer = fs.readFile('assets/non-palette-bitmap.bmp', (err, data) => {
    if (err) throw err;
    console.log(data);
    return data;
  });
};

bitmapReader.transform = function(buffer) {
  for(var i=54; i< buffer.length; i+=3) {
    value1 = buffer.readUInt8(i);
    value2 = buffer.readUInt8(i+1);
    value3 = buffer.readUInt8(i+2);
    greyValue = (value1 + value2 + value3) / 3;
    buffer.writeUInt8(greyValue, i);
    buffer.writeUInt8(greyValue, i+1);
    buffer.writeUInt8(greyValue, i+2);
  }
  bitmapReader.createNew(buffer);
};

bitmapReader.createNew = function(buffer) {
  fs.writeFile('assets/transformed.bmp', buffer);
};
