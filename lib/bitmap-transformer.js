var bitmap = [];
for(var i=54; i< bitmap.length; i+3) {
  var value1 = bitmap.readUInt8(i);
  var value2 = bitmap.readUInt8(i+1);
  var value3 = bitmap.readUInt8(i+2);
  var greyValue = (value1 + value2 + value3) / 3;
  bitmap.writeUInt8(greyValue, i);
  bitmap.writeUInt8(greyValue, i+1);
  bitmap.writeUInt8(greyValue, i+2);
}
