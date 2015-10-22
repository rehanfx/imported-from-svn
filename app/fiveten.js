(function (ft) {
  "use strict";

  if (!ft) {
    return;
  }

  var elExpression = document.getElementById('expression'),
      elResult = document.getElementById('result'),
      btnFive = document.getElementById('addfive'),
      btnTen = document.getElementById('addten');

  function updateView() {
    elExpression.innerText = ft.expression();
    elResult.innerText = ft.sum();
  }

  function onFive() {
    ft.addFive();
    updateView();
  }

  function onTen() {
    ft.addTen();
    updateView();
  }


  btnFive.addEventListener("click", onFive);
  btnTen.addEventListener("click", onTen);
  updateView();

}(FiveTenVM));
