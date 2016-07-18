const expect = require('chai').expect;
const fs = require('fs');

describe('transformed image created', function() {
  var fileArray = [];
  before(function(done) {
    fs.readFile('../assets/transfor med.bmp', function(err, data) {
      fileArray.push(data);
    });
    done();
  });
  it('should contain code to be sure that the transform has occurred', function(done) {
    expect(fileArray[0].length).to.eql(30054);
    done();
  });
});
