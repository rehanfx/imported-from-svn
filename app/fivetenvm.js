var FiveTenVM = (function () {
  "use strict";
  // This is the data/model
  // In future we should be able to save recreate the entire
  // history with this much data.
  var data = {
    name: "History of Fives and Tens",
    history: [],

    addHistory: function (value, cb) {
      this.history.push(value);

      // update the value on the serer
      // (the code below only performs a mock xhr request causing delay of 1 sec)
      // TODO: replace it with a real server code
      var oReq = new XMLHttpRequest();
      oReq.addEventListener("load", cb);
      oReq.open("GET", "http://www.httpbin.org/delay/1", true);
      oReq.send();
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
  function addNumber(num, cb) {
    data.addHistory(num, function() {
      if(sum===0) {
        expression = num;
      } else {
        expression += " + " + num;
      }
      sum += num;
      if(cb && (typeof cb == "function")) {
         cb();
      }
    });
  }

  function addFive(cb) {
    addNumber(5, cb);
  }

  function addTen(cb) {
    addNumber(10, cb);
  }


  // The public interface to the view model module
  return {
    expression: function () { return expression; },
    sum: function () { return sum; },
    addFive: addFive,
    addTen: addTen
  };

}());
