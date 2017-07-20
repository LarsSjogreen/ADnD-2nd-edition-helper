var mathHelp = require('./mathHelp');
var dice = (function() {

  var d6 = function() {
    return mathHelp.randomInt(1, 7);
  };

  var d4 = function() {
    return mathHelp.randomInt(1, 5);
  };

  var d8 = function() {
    return mathHelp.randomInt(1, 9);
  };

  var d10 = function() {
    return mathHelp.randomInt(1,11);
  }

  var d12 = function() {
    return mathHelp.randomInt(1,13);
  }

  var d20 = function() {
    return mathHelp.randomInt(1,21);
  };

  var roll = function(numDice, dieFunc) {
    var sum = 0;
    for (var i=0;i<numDice;i++) {
      sum += dieFunc();
    }
    return sum;
  }

  return {
    d4: d4,
    d6: d6,
    d8: d8,
    d10: d10,
    d12: d12,
    d20: d20,
    roll: roll
  };
}());

module.exports = dice;
