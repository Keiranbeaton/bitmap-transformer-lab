const expect = require('chai').expect;
const fs = require('fs');

describe('transformed image created', function() {
  var fileArray = [];
  fs.readFile('../assets/transformed.bmp', function(err, data) {
    fileArray.push(data);
  });
  it('should contain code to be sure that the transform has occurred', function(done) {
    expect(fileArray[0].length).to.eql(30054);
    done();
  });
});
