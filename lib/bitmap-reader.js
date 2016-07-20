const fs = require('fs');
const EE = require('events');
var bitmapReader = module.exports = exports = {};
var ee = new EE();
var value1 = 0;
var value2 = 0;
var value3 = 0;
var greyValue = 0;


ee.on('fileDone', function(bufferData, bufVar) {
  // what is the point of this function
  // what is the difference between bufferData and bufVar
  if (bufferData) {
    bufVar = bufferData;
  }
  bitmapReader.transform(bufVar);
});

bitmapReader.read = function(buffer) {
  //since fs.readFile is asynchronous it wont return anything, the results of the function will be passed into the callbak
  buffer = fs.readFile('assets/non-palette-bitmap.bmp', (err, data) => {
    if (err) throw err;
    console.log(data);
    //could you just call the transform in here, instead of emitting an event
    ee.emit('fileDone', data, buffer);
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
