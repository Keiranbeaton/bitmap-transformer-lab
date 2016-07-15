const fs = require('fs');
var value1 = 0;
var value2 = 0;
var value3 = 0;
var greyValue = 0;

var bitmap = fs.readFileSync('../assets/non-palette-bitmap.bmp');
for(var i=54; i< bitmap.length; i+=3) {
  value1 = bitmap.readUInt8(i);
  value2 = bitmap.readUInt8(i+1);
  value3 = bitmap.readUInt8(i+2);
  greyValue = (value1 + value2 + value3) / 3;
  bitmap.writeUInt8(greyValue, i);
  bitmap.writeUInt8(greyValue, i+1);
  bitmap.writeUInt8(greyValue, i+2);
  console.log(greyValue);
}

fs.writeFileSync('../assets/transformed.bmp', bitmap);
