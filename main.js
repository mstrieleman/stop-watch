function start() {
  if (startTime === null) {
    startTime = new Date();
  }
  if (stoppedTime !== null) {
    totalTimeStopped += new Date() - stoppedTime;
  }
  beginInterval = setInterval(renderClock, 10);
}

function stop() {
  stoppedTime = new Date();
  clearInterval(beginInterval);
}

function renderClock() {
  var currentTime = new Date();
  var timeElapsed = new Date(currentTime - startTime - totalTimeStopped);
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

var startTime = null;
var stoppedTime = null;
var totalTimeStopped = 0;
var beginInterval = null;

var startButton = document.querySelector("#start-button");
startButton.addEventListener("click", function() {
  start();
});

var stopButton = document.querySelector("#stop-button");
stopButton.addEventListener("click", function() {
  stop();
});
