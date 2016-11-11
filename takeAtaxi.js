// takeAtaxi() take in two date parameters currentTime and targetTime respectively
// both params should be in the format: 'yyyy/mm/dd hh:mm'
// this method returns 'take a taxi' if time left <= 5
// returns 'Start running' if time left is less than 25 minutes.
// returns 'Enjoy the walk' if time left is more than 25 minutes.
var startTime = new Date();
var timeDiff;
function takeAtaxi(currentTime, targetTime){
  currentTime = new Date(currentTime);
  targetTime = new Date(targetTime);

  timeDiff = Math.abs(targetTime - currentTime);  //Difference in milliseconds
  timeDiff = timeDiff/60000;

  if(timeDiff <= 5)
    return "Take a taxi fast! You are left with "+timeDiff+' minutes.'
  else if(timeDiff <= 25)
    return 'Start running now, you are left with '+timeDiff+' minutes.'
  else
    return 'Enjoy the walk, you still have '+timeDiff+' minutes.'
}
const assert = require('assert');
console.log(takeAtaxi('2016/11/11 9:10','2016/11/11 9:30'));
assert.equal(takeAtaxi('2016/11/11 9:00','2016/11/11 9:30'),'Enjoy the walk, you still have '+timeDiff+' minutes.');
