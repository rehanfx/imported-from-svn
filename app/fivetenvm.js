var FiveTenVM = (function () {
  "use strict";

  // This is the data/model
  // In future we should be able to save recreate the entire
  // history with this much data.
  var data = {
    name: "History of Fives and Tens",
    history: [],

    addHistory: function (value) {
      this.history.push(value);
    }

    // Load history from JSON data file
    // loadFromFile: function (file) {}

    // Save history to JSON data file
    // saveToFile: function (file) {}

  };

  // View Model for the FiveTen App
  //
  // We need to keep the "expression" and its corresponding "sum" ready for view while
  // keeping in sync with the actual data values

  var expression = "0"; //data.history.reduce(function (p, c) { return p + " + " + c; }, "0");
  var sum = 0; //data.history.reduce(function (p, c) { return p + c; }, 0);

  // common code for addFive and addTen
  function addNumber(num) {
    data.addHistory(num);
    if(sum===0) {
      expression = num;
    } else {
      expression += " + " + num;
    }
    sum += num;
  }

  function addFive() {
    addNumber(5);
  }

  function addTen() {
    addNumber(10);
  }


  // The public interface to the view model module
  return {
    expression: function () { return expression; },
    sum: function () { return sum; },
    addFive: addFive,
    addTen: addTen
  };

}());

module.exports = FiveTenVM;
