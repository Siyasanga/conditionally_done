var whichPlatform = function(route){
    switch(route) {
        case "Langa":
            return "platform 1";
        case "Stellenbosch":
            return "platform 6";
        case "Wynberg":
            return "platform 2";
        default:
            return "There is no train to " + route;
    }
}

const assert = require('assert');

//fix these asserts
assert.equal(whichPlatform('Langa'), 'platform 1');
assert.equal(whichPlatform('Stellenbosch'), 'platform 6');
assert.equal(whichPlatform('Wynberg'), 'platform 2');
assert.equal(whichPlatform('Parow'), 'There is no train to Parow');
// make sure all the asserts are passing
