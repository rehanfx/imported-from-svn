(function (ft) {
  "use strict";

  if (!ft) {
    return;
  }

  var elExpression = document.getElementById('expression'),
      elResult = document.getElementById('result'),
      btnFive = document.getElementById('addfive'),
      btnTen = document.getElementById('addten'),
      textWaiting = document.getElementsByClassName("waiting")[0];

  function updateView() {
    elExpression.innerText = ft.expression();
    elResult.innerText = ft.sum();
    endWaiting();
  }

  function startWaiting() {
    textWaiting.classList.remove("hidden");
    btnFive.setAttribute("disabled","");
    btnTen.setAttribute("disabled","");
  }

  function endWaiting() {
    btnFive.removeAttribute("disabled");
    btnTen.removeAttribute("disabled");
    textWaiting.classList.add("hidden");
  }

  function onFive() {
    startWaiting();
    ft.addFive(updateView);
  }

  function onTen() {
    startWaiting();
    ft.addTen(updateView);
  }


  btnFive.addEventListener("click", onFive);
  btnTen.addEventListener("click", onTen);
  updateView();

}(FiveTenVM));
