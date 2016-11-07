var lunchWhere = function(bankBalance){
    if (bankBalance >= 4500 ){
        return "Go and get KFC!";
    }
    else if (bankBalance > 1500 && bankBalance < 4500){
        return "Go to PnP!";
    }
    else{
        return "Two minute noodles today!";
    }
};

const assert = require('assert');

//fix these asserts
assert.equal(lunchWhere(4500), 'Go and get KFC!');
assert.equal(lunchWhere(3500), 'Go to PnP!');
assert.equal(lunchWhere(1000), 'Two minute noodles today!');
//ensure all these asserts are passing
