function fromWhere(carReg){
  //We are extracting the first 2 characters from carReg
  switch (carReg.substring(0,2)) {
    case 'CY':
      return 'Bellville';
      break;
    case 'CJ':
      return 'Paarl';
      break;
    case 'CA':
      return 'Cape Town';
      break;
    default:
      return 'Some other place!';
  }
}
const assert = require('assert')
assert.equal(fromWhere('CJ 523519'), 'Paarl');
assert.equal(fromWhere('CA 812328'), 'Cape Town');
assert.equal(fromWhere('CY 523519'), 'Bellville');
assert.equal(fromWhere('CC 523519'), 'Some other place!');
