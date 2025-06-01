let ms = 0, s = 0, m = 0, h = 0;
let timer;

const display = document.querySelector(".timer-Display");
const laps = document.querySelector(".laps");

function getTimer() {
  return (
    (h < 10 ? "0" + h : h) + " : " +
    (m < 10 ? "0" + m : m) + " : " +
    (s < 10 ? "0" + s : s) + " : " +
    (ms < 10 ? "0" + ms : ms)
  );
}

function run() {
  display.innerHTML = getTimer();
  ms++;
  if (ms === 100) {
    ms = 0;
    s++;
  }
  if (s === 60) {
    s = 0;
    m++;
  }
  if (m === 60) {
    m = 0;
    h++;
  }
  if (h === 13) {
    h = 1;
  }
}

function start() {
  if (!timer) {
    timer = setInterval(run, 10);
  }
}

function pause() {
  clearInterval(timer);
  timer = null;
}

function reset() {
  pause();
  ms = s = m = h = 0;
  display.innerHTML = getTimer();
}

function restart() {
  reset();
  start();
}

function lap() {
  if (timer) {
    const li = document.createElement("li");
    li.innerText = getTimer();
    laps.appendChild(li);
  }
}

function resetLap() {
  laps.innerHTML = "";
}