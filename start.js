var startTime = null;

function start() {
  var started = null;
  if (startTime === null) {
    startTime = new Date();
    started = setInterval(renderClock, 10);
  }
}

var $startButton = document.querySelector("#start-button");
$startButton.addEventListener("click", function() {
  start();
});

function renderClock() {
  var currentTime = new Date();
  var timeElapsed = new Date(currentTime - startTime);
  var hours = timeElapsed.getUTCHours();
  var minutes = timeElapsed.getUTCMinutes();
  var seconds = timeElapsed.getUTCSeconds();
  var ms = timeElapsed.getUTCMilliseconds();

  document.getElementById("stop-watch").textContent =
    (hours > 9 ? hours : "0" + hours) +
    ":" +
    (minutes > 9 ? minutes : "0" + minutes) +
    ":" +
    (seconds > 9 ? seconds : "0" + seconds) +
    ":" +
    (ms > 99 ? ms : ms > 9 ? "0" + ms : "00" + ms);
}
