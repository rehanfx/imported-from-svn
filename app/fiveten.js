(function (ft) {
  if(ft == undefined) {
    return;
  }

  var elExpression = document.getElementById('expression');
  var elResult = document.getElementById('result');
  var btnFive = document.getElementById('addfive');
  var btnTen = document.getElementById('addten');

  function updateView() {
    elExpression.innerText = ft.expression();
    elResult.innerText = ft.sum();
  }

  function onFive () {
    ft.addFive();
    updateView();
  }

  function onTen () {
    ft.addTen();
    updateView();
  }


  btnFive.addEventListener("click", onFive );
  btnTen.addEventListener("click", onTen );
  updateView();

})(FiveTenVM);
