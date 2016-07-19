const expect = require('chai').expect;
const fs = require('fs');

describe('transformed image created', function() {
  var fileArray = [];
  before(function(done) {
    fs.readFile('../assets/transfor med.bmp', function(err, data) {
      // what if there was an error reading the file
      fileArray.push(data);
    });
    done(); //make sure your done call is in the async callback or the callback might not get executed
  });
  it('should contain code to be sure that the transform has occurred', function(done) {
    expect(fileArray[0].length).to.eql(30054);
    done();
  });
});
