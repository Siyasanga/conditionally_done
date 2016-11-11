function transportFee(shift){
  if(shift == 'morning')
    return  'R20';
  else if(shift == 'afternoon')
    return 'R10';
  else
    return 'R0 Transport provided for.';
}
const assert = require('assert');
assert.equal(transportFee('morning'),'R20');
assert.equal(transportFee('afternoon'),'R10');
assert.equal(transportFee('R0 Transport provided for.'),'R0 Transport provided for.');
