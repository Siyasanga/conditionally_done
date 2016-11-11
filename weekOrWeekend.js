function weekOrWeekend(day){
  var weekDays = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];
  // If index of day is within the first five days its a weekday
  if(weekDays.indexOf(day) <= 4)
    return "week";
  // Otherwise it's a weekend
  else
    return "weekend";
}
const assert = require('assert');
// after you declared the function
assert.equal(weekOrWeekend('Wednesday'), 'week');
assert.equal(weekOrWeekend('Sunday'), 'weekend');
