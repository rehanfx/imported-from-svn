  function doBlink() {
    // Blink, Blink, Blink...
    var blink = document.all.tags("BLINK")
    for (var i = 0; i < blink.length; i++)
      blink[i].style.visibility = blink[i].style.visibility == "" ? "hidden" : ""
  }

  function startBlink() {
    // Make sure it is IE4
    if (document.all)
      setInterval("doBlink()", 1000)
  }
  window.onload = startBlink;


o = {
  history: [],
};

element = document.createElement('div');
setTimeout(function () {
  document.querySelector('body').insertBefore(element, document.querySelector('button'));
  element.textContent = 0;
}, 200)

function addFive() {
  addhistory(5)
  element.innerHTML = parseInt(element.innerHTML) + 5;
}

function addhistory(Added) {
  document.
  querySelector('span:last-child').appendChild(
    document.createElement('span')

  )
  document.querySelector('span:last-child').textContent += ' + ' + Added;
}

setTimeout(function() {
  document.querySelector('button').onclick = function() {
    addFive();
  }
}, 200);
