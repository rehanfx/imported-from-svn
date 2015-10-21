var FiveTenVM = (function () {
  var history= [];

  //function loadHistory() {
  //
  //}

  function addHistory(value) {
    history.push(value);
  }

  var expression = "0";//data.reduce(function (p, c) { return p + " + " + c; }, "0");
  var sum = 0;//data.reduce(function (p, c) { return p + c; }, 0);

  function addNumber(num) {
    addHistory(num);
    expression += " + " + num;
    sum += num;
  }

  function addFive() {
    addNumber(5);
  }

  function addTen() {
    addNumber(10);
  }


  return {
    expression: function() { return expression; },
    sum: function() { return sum; },
    addFive: addFive,
    addTen: addTen
  };


  return {
    addHistory: addHistory,
    getHistory: function() { return history; }
    // saveHistory:
    // restoreHistory:
  }
})();


